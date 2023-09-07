namespace syncPowershellInterfaces;

public interface ISaveData
{
    Task<bool> SaveData(IDataToBeSent data);
}
