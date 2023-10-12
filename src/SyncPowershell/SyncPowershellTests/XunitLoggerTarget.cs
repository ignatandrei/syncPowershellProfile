using NLog.Layouts;
using NLog;
using NLog.Targets;

namespace SyncPowershellTests;

internal class XunitLoggerTarget : TargetWithLayout
{
    private readonly ITestOutputHelper helper;

    public XunitLoggerTarget(ITestOutputHelper helper)
    {
        this.helper = helper;
    }

    protected override void Write(LogEventInfo logEvent)
    {
        var logMessage = Layout.Render(logEvent);
        helper.WriteLine("from NLOG:"+logMessage);
    }
}
