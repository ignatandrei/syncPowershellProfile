namespace syncPowershellObjects;
public partial class DataUpload
{
    private readonly IPowershellAPI api;
    private readonly ILogger logger;

    public DataUpload(IPowershellAPI api, ILogger logger)
    {
        this.api = api;
        this.logger = logger;
    }
    public DataToBeSent? data { get; set; }

    public async Task<string> Send()
    {
        await Task.Delay(1000);
        ArgumentNullException.ThrowIfNull(data);
        return await api.SendData(data!);
    }

    
}