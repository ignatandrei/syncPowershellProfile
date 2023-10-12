namespace syncPowershellObjects;

public class DataGatherer
{
    private readonly ISystem_Environment environment;
    private readonly ISystem_IO_File file;
    private readonly ISystem_IO_Path path;
    private readonly ILogger logger;

    public DataGatherer(ISystem_Environment environment, ISystem_IO_File file, ISystem_IO_Path path, ILogger logger)
    {
        this.environment = environment;
        this.file = file;
        this.path = path;
        this.logger = logger;
    }
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
}
