using NLog.Config;
using Xunit.Sdk;

namespace SyncPowershellTests;
partial class TestUploadAndRetrieve : FeatureFixture
{
    ILogger logger;
    public TestUploadAndRetrieve(ITestOutputHelper outputHelper)
    {
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
        //this.outputHelper = outputHelper;


        logger.LogInformation("start test " + nameof(TestUploadAndRetrieve));
        NLog.LogManager.Flush(); 

    }
    DataToBeSent? data;
    string? url;
    string userName = "Andrei";
    string pc = "TestPCAndrei";
    //private readonly ITestOutputHelper outputHelper;

    private async Task Given_PowershellProfile7_IsFound_For_UserName_PC(string UserName,string PC,string value)
    {
        
        var en = Rock.Create<ISystem_Environment>();
        en.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns("");
        en.Properties().Getters().UserName().Returns(UserName);
        en.Properties().Getters().MachineName().Returns(PC);

        var path = Rock.Create<ISystem_IO_Path>();
        path.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns("");
        var file = Rock.Create<ISystem_IO_File>();
        file.Methods().Exists(Arg.Any<string?>()).Returns(true);
        file.Methods()
            .ReadAllTextAsync(Arg.Any<string>(), CancellationToken.None)
            .Returns(Task.FromResult(value));

        DataGatherer gatherer = new(en.Instance(), file.Instance(), path.Instance(), logger);
        data = await gatherer.GetData();
        data.Should().NotBeNull();
        en.Verify();
        path.Verify();
        file.Verify();
    }
    private async Task Given_NoPowershellProfile7_IsFound_For_UserName_PC(string UserName, string PC)
    {
        var en = Rock.Create<ISystem_Environment>();
        en.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns("");
        en.Properties().Getters().UserName().Returns(UserName);
        en.Properties().Getters().MachineName().Returns(PC);

        var path = Rock.Create<ISystem_IO_Path>();
        path.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns("");
        var file = Rock.Create<ISystem_IO_File>();
        file.Methods().Exists(Arg.Any<string?>()).Returns(false);


        DataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance(), logger);
        data = await gatherer.GetData();
        data.Should().NotBeNull();
        en.Verify();
        path.Verify();
        file.Verify();
    } 

    private async Task When_the_data_is_sent()
    {
        var saveData = Rock.Create<ISaveData>();
        saveData.Methods().SaveData(Arg.Any<IDataToBeSent>())
            .Callback(it=>Task.FromResult(true));

        var api = Rock.Create<IPowershellAPI>();
        var innerReceive =new ReceiveData(saveData.Instance(), "https://azure.powershellsync.com", logger);
        var rec = new ReceiveData_Decorator(innerReceive);
        api.Methods().SendData(Arg.Any<IDataToBeSent>())
            .Callback(a => rec.SaveData(a));
            ; 
        DataUpload inner = new(api.Instance(), logger);
        DataUpload_Decorator dataUpload = new DataUpload_Decorator(inner); 
        dataUpload.data = data!;
        url=await dataUpload.Send();
        api.Verify();

    }
    private async Task Then_Can_Retrieve_Data(string userName, string pc, int pwshNumber,string retValue)
    {
        var retrieve=Rock.Create<IRetrieveData>();
        retrieve.Methods().RetrieveData(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<int>() )
            .Callback((u, pc, p) => Task.FromResult("text"));

        var api = Rock.Create<IPowershellAPI>();
        var innerRetr = new RetrieveData(retrieve.Instance(), userName, pc, logger);
        var retr=new RetrieveData_Decorator(innerRetr);
        api.Methods().GetData(userName, pc, pwshNumber)
            .Callback((userName, pc, pwshNumber) => 
                    retr.GetPwsh(pwshNumber));
        var data = await api.Instance().GetData(userName, pc, pwshNumber);
        data.Should().Be(retValue);
    }
    private void Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC(string UserName,string PC)
    {
        var b= Uri.TryCreate(url,UriKind.Absolute, out var uri);
        b.Should().BeTrue($"uri {url} must be created");
        url.Should().NotBeNullOrWhiteSpace("must have an url");
        url.Should().Contain(UserName);
        url.Should().Contain(PC);
        url.Should().Contain($"{UserName}/{PC}");
        url.Should().EndWith($"{UserName}/{PC}");
    }
    private void Then_the_return_value_should_be_an_URL_Ending_In_UserName_PC_With_ID(string UserName, string PC)
    {
        var b = Uri.TryCreate(url, UriKind.Absolute, out var uri);
        b.Should().BeTrue($"uri {url} must be created");
        url.Should().NotBeNullOrWhiteSpace("must have an url");
        url.Should().Contain(UserName);
        url.Should().Contain(PC);
        url.Should().Contain($"{UserName}/{PC}");
        url.Should().Contain($"{UserName}/{PC}/{data!.PowershellNumber}");

    }
}
