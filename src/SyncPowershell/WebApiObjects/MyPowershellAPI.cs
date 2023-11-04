namespace WebApiObjects;
public class MyPowershellAPI : IPowershellAPI
{
    public async Task<string> SendData(IDataToBeSent data)
    {
        throw new NotImplementedException();
    }

    public async Task<string> getPCs(string userName)
    {
        throw new NotImplementedException();
    }

    public async Task<string> GetData(string userName, string pcName, int powershellNumber)
    {
        throw new NotImplementedException();
    }
}

