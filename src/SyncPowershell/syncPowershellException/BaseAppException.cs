namespace syncPowershellException;
public abstract class BaseAppException: Exception
{
    public BaseAppException(string message): base(message)
    {
        
    }
    public BaseAppException(string message, Exception inner)
        : base(message, inner)
    {
    }

}
