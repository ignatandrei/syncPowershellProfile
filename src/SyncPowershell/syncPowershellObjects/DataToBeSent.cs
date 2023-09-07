namespace syncPowershellObjects;
public class DataToBeSent : IDataToBeSent
{
    public string? UserName { get; internal set; }
    public string? PC { get; internal set; }
    public string? Powershell { get; internal set; }
    public int PowershellNumber { get; internal set; }


}
