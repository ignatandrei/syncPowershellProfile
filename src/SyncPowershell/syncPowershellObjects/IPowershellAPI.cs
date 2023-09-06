namespace syncPowershellObjects;

public interface IPowershellAPI
{
    [Post("/api/v1/sendData")]
    Task<string> SendData([Body]DataToBeSent data);

    [Get("/api/v1/getPCs/{userName}/")]
    Task<string> getPCs(string userName);
    
    [Get("/api/v1/getData/{userName}/{pcName}/{powershellNumber}")]
    Task<string> GetData(string userName, string pcName, string powershellNumber);
}
