namespace syncPowershellObjects;

public partial class RetrieveData
{
    private readonly IRetrieveData retrieveData;
    private string userName;
    private string pc;
    private readonly ILogger logger;

    public RetrieveData(IRetrieveData retrieveData, string userName, string pc, ILogger logger)
    {
        this.retrieveData = retrieveData;
        this.userName = userName;
        this.pc = pc;
        this.logger = logger;
    }

    public Task<string> GetPwsh(int pwshNumber)
    {
        return retrieveData.RetrieveData(userName, pc, pwshNumber);
    }
}