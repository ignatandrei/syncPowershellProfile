namespace syncPowershellObjects;

public class ReceiveData
{
    private readonly ISaveData saveData;
    private readonly string hostname;

    public ReceiveData(ISaveData saveData, string hostname)
    {
        this.saveData = saveData;
        this.hostname = hostname;
    }
    public async Task<string> SaveData(DataToBeSent data) 
    {
        await saveData.SaveData(data);
        //await Task.Delay(1000);
        string ret=hostname+"/view/v1/" + data.UserName + "/" + data.PC;
        if(string.IsNullOrWhiteSpace(data.Powershell ))return ret;
        ret += "/" + data.PowershellNumber;
        return ret;
    }
}
