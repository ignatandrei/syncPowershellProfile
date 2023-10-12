namespace syncPowershellObjects;

public partial class RetrieveData_Decorator
{
}

partial class RetrieveData:IDecoratorMethodV1
{
    public void EndMethod(MethodRecognizer recognizer)
    {
        logger.LogData(recognizer);
    }

    public void ExceptionMethod(Exception ex, MethodRecognizer recognizer)
    {
        logger.LogData(recognizer);
    }

    public void StartMethod(MethodRecognizer recognizer)
    {
        logger.LogData(recognizer);

    }
}

