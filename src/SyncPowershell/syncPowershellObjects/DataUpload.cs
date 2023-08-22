namespace syncPowershellObjects;

public class DataUpload
{
    public DataToBeSent data { get; set; }

    public async Task<string> Send()
    {
        await Task.Delay(1000);
        return "http://www.yahoo.com";
    }
}