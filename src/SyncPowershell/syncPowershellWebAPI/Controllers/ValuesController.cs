
using Refit;

namespace syncPowershellWebAPI.Controllers;
[Route("api/[controller]/v{version:apiVersion}/[action]")]
[ApiController]
[ApiVersion(1.0)]
public class DataController : ControllerBase, IPowershellAPI
{

    [HttpGet]
    public Task<string> GetData(string userName, string pcName, int powershellNumber)
    {
        throw new NotImplementedException();
    }
    [HttpGet]

    public Task<string> getPCs(string userName)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public Task<string> SendData([FromBody] IDataToBeSent data)
    {
        throw new NotImplementedException();
    }
}
