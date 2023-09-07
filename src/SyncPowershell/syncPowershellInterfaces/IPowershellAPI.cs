namespace syncPowershellInterfaces;

public interface IPowershellAPI
{
    [Post("/api/v1/sendData")]
    Task<string> SendData([Body]IDataToBeSent data);

    [Get("/api/v1/getPCs/{userName}/")]
    Task<string> getPCs(string userName);
    
    [Get("/api/v1/getData/{userName}/{pcName}/{powershellNumber}")]
    Task<string> GetData(string userName, string pcName, int powershellNumber);
}
