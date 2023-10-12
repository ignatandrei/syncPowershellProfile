using RSCG_DecoratorCommon;

namespace syncPowershellObjects;

public partial class ReceiveData_Decorator
{
}

partial class ReceiveData : IDecoratorMethodV1
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

