namespace syncPowershellWebAPI.Controllers;
[Route("api/v{version:apiVersion}/[controller]/[action]")]
[ApiController]
[ApiVersion(1.0)]
public class DataController : ControllerBase
{
    private readonly IPowershellAPI _powershellAPI;

    public DataController(IPowershellAPI powershellAPI)
    {
        _powershellAPI = powershellAPI;
    }

    [HttpPost()]
    public async Task<string> SendData([FromBody] IDataToBeSent data)
    {
        return await _powershellAPI.SendData(data);
    }

    [HttpGet("{userName}")]
    public async Task<string> getPCs(string userName)
    {
        return await _powershellAPI.getPCs(userName);
    }

    [HttpGet("/{userName}/{pcName}/{powershellNumber}")]
    public async Task<string> GetData(string userName, string pcName, int powershellNumber)
    {
        return await _powershellAPI.GetData(userName, pcName, powershellNumber);
    }
}
