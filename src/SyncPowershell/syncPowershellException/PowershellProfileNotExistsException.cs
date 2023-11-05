namespace syncPowershellException;
public class PowershellProfileNotExistsException : BaseAppException
{
    public readonly string fileName;

    public PowershellProfileNotExistsException(string fileName) : base($"file {fileName} does not exists")
    {
        this.fileName = fileName;
    }

}
