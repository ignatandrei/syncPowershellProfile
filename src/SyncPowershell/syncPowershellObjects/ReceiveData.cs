namespace syncPowershellObjects;

public class ReceiveData
{
    private readonly string hostname;

    public ReceiveData(string hostname)
    {
        this.hostname = hostname;
    }
    public async Task<string> SaveData(DataToBeSent data) 
    {
        await Task.Delay(1000);
        string ret=hostname+"/view/v1/" + data.UserName + "/" + data.PC;
        if(string.IsNullOrWhiteSpace(data.Powershell ))return ret;
        ret += "/" + 1;
        return ret;
    }
}
