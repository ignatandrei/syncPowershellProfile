namespace syncPowershellObjects;

public interface ISaveData
{
    Task<bool> SaveData(DataToBeSent data);
}
