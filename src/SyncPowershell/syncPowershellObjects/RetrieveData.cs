namespace syncPowershellObjects;

public class RetrieveData
{
    private readonly IRetrieveData retrieveData;
    private string userName;
    private string pc;

    public RetrieveData(IRetrieveData retrieveData, string userName, string pc)
    {
        this.retrieveData = retrieveData;
        this.userName = userName;
        this.pc = pc;
    }

    public Task<string> GetPwsh(int pwshNumber)
    {
        return retrieveData.RetrieveData(userName, pc, pwshNumber);
    }
}