namespace syncPowershellInterfaces;

public interface IDataToBeSent
{
    string? PC { get; }
    string? Powershell { get; }
    int PowershellNumber { get; }
    string? UserName { get; }
}