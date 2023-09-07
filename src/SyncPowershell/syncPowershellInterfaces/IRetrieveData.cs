namespace syncPowershellInterfaces;

public interface IRetrieveData
{
    Task<string> RetrieveData(string userName, string pc, int powershellNumber);
}
