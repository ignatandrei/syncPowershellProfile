import ADR007 from '../../docs/ADR/ADR007.md'

# Added deployment

After this ADR 

<!--truncate-->

***
<ADR007 />

I have created the custom exception base class

```csharp
namespace syncPowershellException;
public abstract class BaseAppException: Exception
{
    public BaseAppException(string message): base(message)
    {
        
    }
    public BaseAppException(string message, Exception inner)
        : base(message, inner)
    {
    }

}
```

I resisted to the temptation to create a custom exception for every error.  Example : 

```csharp
ArgumentNullException.ThrowIfNull(data);
```

should be left as it is.

Instead ,look at this example:

```csharp
public async Task<DataToBeSent> GetData()
{
    var powershell7Profile =environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );
    powershell7Profile = path.Combine(powershell7Profile, "WindowsPowerShell", "Microsoft.PowerShell_profile.ps1");
    DataToBeSent dataToBeSent = new ();
    dataToBeSent.UserName=environment.UserName;
    dataToBeSent.PC = environment.MachineName;
    if (file.Exists(powershell7Profile))
    {
        dataToBeSent.Powershell = await file.ReadAllTextAsync(powershell7Profile, CancellationToken.None);
        dataToBeSent.PowershellNumber = 7;
    }
    return dataToBeSent;
}
```

If the file does not exists , then an error must be thrown. 

```csharp
public class PowershellProfileNotExistsException : BaseAppException
{
    public readonly string fileName;

    public PowershellProfileNotExistsException(string fileName) : base($"file {fileName} does not exists")
    {
        this.fileName = fileName;
    }

}
```

And the code will be modified like this:

```csharp
public async Task<DataToBeSent> GetData()
{
    var powershell7Profile =environment.GetFolderPath( Environment.SpecialFolder.MyDocuments );
    powershell7Profile = path.Combine(powershell7Profile, "WindowsPowerShell", "Microsoft.PowerShell_profile.ps1");
    DataToBeSent dataToBeSent = new ();
    dataToBeSent.UserName=environment.UserName;
    dataToBeSent.PC = environment.MachineName;
    if (!file.Exists(powershell7Profile))
        throw new PowershellProfileNotExistsException(powershell7Profile);
        
    dataToBeSent.Powershell = await file.ReadAllTextAsync(powershell7Profile, CancellationToken.None);
    dataToBeSent.PowershellNumber = 7;
    
    
    return dataToBeSent;
}
```


Also the test will be modified from
```csharp
DataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance(), logger);
data = await gatherer.GetData();
data.Should().NotBeNull();
```

to 


```csharp
DataGatherer gatherer = new(en.Instance(), file.Instance(),path.Instance(), logger);
var X=async ()=> (await gatherer.GetData());
await X.Should().ThrowAsync<PowershellProfileNotExistsException>();
```

