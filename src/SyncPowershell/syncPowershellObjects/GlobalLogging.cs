using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace syncPowershellObjects;

static internal class GlobalLogging
{
    public static void LogData(this ILogger logger, MethodRecognizer recognizer ,Exception? ex=null,[CallerMemberName] string name = "")
    {
        //TB: 2024-01-01 add activity tracing
        //TB: 2024-01-01 add named parameters for logging
        if (logger == null) return;
        if (ex != null)
        {
            logger.LogError($"{name} {recognizer.UniqueId}");
            if (recognizer.ValueTypeParameters.Count > 0)
                logger.LogError($"{recognizer.ValueTypeParametersString}");
        }
        else
        {
        
            logger.LogInformation(ex, $"{name} {recognizer.UniqueId}");
            if (recognizer.ValueTypeParameters.Count > 0)
                logger.LogInformation(ex,$"{recognizer.ValueTypeParametersString}");
        }

    }
}
