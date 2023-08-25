



namespace syncPowershellObjects;

public interface IPowershellAPI
{
    [Post("/api/v1/posts")]
    Task<string> SendData([Body]DataToBeSent data);
}
