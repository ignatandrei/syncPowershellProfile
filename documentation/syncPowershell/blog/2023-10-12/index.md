import ADR001 from '../../docs/ADR/ADR001.md'

# Adding logging

Adding logging for a project should  be simple, right ? 

<!--truncate-->

After all, we have the ADR and we have ILogger from Microsoft and the NLOG Framework

<ADR001 />


## Implementation


First, add to the constructor of each class the Ilogger parameter.

Then , to automatically instrument each method of class with logging , I use https://www.nuget.org/packages/rscg_decorator

```csharp
namespace syncPowershellObjects;

static internal class GlobalLogging
{
    public static void LogData(this ILogger logger, MethodRecognizer recognizer ,Exception? ex=null,[CallerMemberName] string name = "")
    {
        //TB: 2024-01-01 add activity tracing
        //TB: 2024-01-01 add named parameters for logging
        if (logger == null) return;
        if (ex != null)
        {
            logger.LogError($"{name} {recognizer.UniqueId}");
            if (recognizer.ValueTypeParameters.Count > 0)
                logger.LogError($"{recognizer.ValueTypeParametersString}");
        }
        else
        {
        
            logger.LogInformation(ex, $"{name} {recognizer.UniqueId}");
            if (recognizer.ValueTypeParameters.Count > 0)
                logger.LogInformation(ex,$"{recognizer.ValueTypeParametersString}");
        }

    }
}

```

And in the class
```csharp

public partial class ReceiveData_Decorator
{
}

partial class ReceiveData : IDecoratorMethodV1
{
    public void EndMethod(MethodRecognizer recognizer)
    {
        logger.LogData(recognizer);
    }

    public void ExceptionMethod(Exception ex, MethodRecognizer recognizer)
    {
        logger.LogData(recognizer);
    }

    public void StartMethod(MethodRecognizer recognizer)
    {
        logger.LogData(recognizer);

    }
}
```


The first problem is that many classes in NLOG and Microsoft Logging differs just by namespace ( ILogger, LogLevel ) . So you must be careful when write (global ) using namespaces

Second, XUnit has his ITestOutputHelper too - so we have to integrate also this.

To combine multiple loggers, CompositeLogger class is necessary . And also, because BeginScope is IDisposable , also a CompositeDisposable is necessary . 

So this is the final code, that integrates OutputHelper as logger

```csharp
//Divergic.Logging.Xunit
var loggerOutput = outputHelper.BuildLoggerFor<TestUploadAndRetrieve>();
//simple way
//ILoggerFactory factory = LoggerFactory.Create(builder =>builder.AddNLog());
NLog.LogFactory f = new NLog.LogFactory();
NLog.SetupBuilderExtensions.LoadConfigurationFromFile(f.Setup(),"nlog.config");
var config = new NLog.Config.LoggingConfiguration(f);

var target = new XunitLoggerTarget(outputHelper);
config.AddTarget("Xunit", target);

config.LoggingRules.Add(new LoggingRule("*", NLog.LogLevel.Trace, target));

ILoggerFactory factory = LoggerFactory.Create(b => b.AddNLog(config));
logger = new CompositeLogger(factory.CreateLogger<TestUploadAndRetrieve>(), loggerOutput);

```

Realise that could be simpler with a simple logger => so a simpler version
```csharp
NLog.LogFactory f = new NLog.LogFactory();
var config = new NLog.Config.LoggingConfiguration(f);

var target = new XunitLoggerTarget(outputHelper);
config.AddTarget("Xunit", target);

config.LoggingRules.Add(new LoggingRule("*", NLog.LogLevel.Trace, target));

ILoggerFactory factory = LoggerFactory.Create(b => b.AddNLog(config));
logger = factory.CreateLogger<TestUploadAndRetrieve>();

```

Adding to console it is for another time