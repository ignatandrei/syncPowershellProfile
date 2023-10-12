using System.Reactive.Disposables;

namespace SyncPowershellTests;
public class CompositeLogger : ILogger
{
    private readonly ILogger[] _loggers;

    public CompositeLogger(params ILogger[] loggers)
    {
        _loggers = loggers;
    }

    public IDisposable? BeginScope<TState>(TState state) where TState : notnull
    {
        
        var cd = new CompositeDisposable();
        foreach(var log in _loggers)
        {
            var item= log.BeginScope(state);
            if(item != null) { cd.Add(item);}
        }
        return cd;
    }

    public bool IsEnabled(LogLevel logLevel)
    {
        return _loggers.Length > 0 && _loggers.Any(it=>it.IsEnabled(logLevel));
    }

    

    public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
    {
        foreach (var log in _loggers)
        {
            log.Log(logLevel,eventId,state,exception, formatter);
        }
    }
}
