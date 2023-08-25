


namespace syncPowershellObjects;
public class DataUpload
{
    private readonly IPowershellAPI api;

    public DataUpload(IPowershellAPI api)
    {
        this.api = api;
    }
    public DataToBeSent? data { get; set; }

    public async Task<string> Send()
    {
        await Task.Delay(1000);
        ArgumentNullException.ThrowIfNull(data);
        return await api.SendData(data!);
    }

    
}