import UseCase002 from '../../docs/UseCases/UseCase002.md'

# Continuing tests - no data

Since the powershell file profile can exists or not , we need a new UseCase

First , rename use cases from 003 to 030 - to let space for others.

So a new 

<!--truncate-->
<UseCase002 />


So how to test when the original code is like

```csharp
var powershell7Profile =Environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );
powershell7Profile = Path.Combine(powershell7Profile, "WindowsPowerShell", "Microsoft.PowerShell_profile.ps1");
DataToBeSent dataToBeSent = new ();
dataToBeSent.UserName=Environment.UserName;
dataToBeSent.PC = Environment.MachineName;
if (File.Exists(powershell7Profile))
{
    dataToBeSent.Powershell = await File.ReadAllTextAsync(powershell7Profile);
    dataToBeSent.PowershellNumber = 7;
}
return dataToBeSent;
```

?

Simple - replace the static Environment with an interface using https://www.nuget.org/packages/RSCG_Static/  -  this is the code:

```csharp
private readonly ISystem_Environment environment;
private readonly ISystem_IO_File file;
private readonly ISystem_IO_Path path;

public DataGatherer(ISystem_Environment environment, ISystem_IO_File file, ISystem_IO_Path path)
{
    this.environment = environment;
    this.file = file;
    this.path = path;
}
public async Task<DataToBeSent> GetData()
{
    var powershell7Profile =environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );
    powershell7Profile = path.Combine(powershell7Profile, "WindowsPowerShell", "Microsoft.PowerShell_profile.ps1");
    DataToBeSent dataToBeSent = new ();
    dataToBeSent.UserName=Environment.UserName;
    dataToBeSent.PC = Environment.MachineName;
    if (file.Exists(powershell7Profile))
    {
        dataToBeSent.Powershell = await file.ReadAllTextAsync(powershell7Profile, CancellationToken.None);
        dataToBeSent.PowershellNumber = 7;
    }
    return dataToBeSent;
}
```


Also, for generating Mocks fast, I will use [Rocks](https://github.com/JasonBock/Rocks/)

```csharp

var en = Rock.Create<ISystem_Environment>();
en.Methods().GetFolderPath(Arg.Any<Environment.SpecialFolder>()).Returns("");
en.Properties().Getters().UserName().Returns(userName);
en.Properties().Getters().MachineName().Returns(pc);

var path = Rock.Create<ISystem_IO_Path>();
path.Methods().Combine(Arg.Any<string>(), Arg.Any<string>(), Arg.Any<string>()).Returns("");
var file = Rock.Create<ISystem_IO_File>();
file.Methods().Exists(Arg.Any<string?>()).Returns(false);

DataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance());
```

And the BDD test looks like this:
```csharp
await Runner            
    .AddAsyncSteps(
    _ =>Given_NoPowershellProfile7_IsFound(),
    _ => When_the_user_want_to_sent()
    )
    .AddSteps(
        _=>Then_the_return_value_should_be_an_URL_Ending_In_UserName_And_PC(userName,pc)
    ).RunAsync();
```