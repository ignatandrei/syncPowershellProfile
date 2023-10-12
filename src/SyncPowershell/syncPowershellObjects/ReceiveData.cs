namespace syncPowershellObjects;

public partial class ReceiveData
{
    private readonly ISaveData saveData;
    private readonly string hostname;
    private readonly ILogger logger;

    public ReceiveData(ISaveData saveData, string hostname, ILogger logger)
    {
        this.saveData = saveData;
        this.hostname = hostname;
        this.logger = logger;
    }
    public async Task<string> SaveData(IDataToBeSent data) 
    {
        await saveData.SaveData(data);
        //await Task.Delay(1000);
        string ret=hostname+"/view/v1/" + data.UserName + "/" + data.PC;
        if(string.IsNullOrWhiteSpace(data.Powershell ))return ret;
        ret += "/" + data.PowershellNumber;
        return ret;
    }
}
