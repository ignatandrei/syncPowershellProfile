namespace syncPowershellObjects;

public class DataGatherer
{
    public async Task<DataToBeSent> GetData()
    {
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
    }
}
