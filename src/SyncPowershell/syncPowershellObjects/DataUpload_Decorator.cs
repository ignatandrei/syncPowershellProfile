using RSCG_DecoratorCommon;

namespace syncPowershellObjects;
public partial class DataUpload_Decorator
{

}
partial class DataUpload : IDecoratorMethodV1
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
