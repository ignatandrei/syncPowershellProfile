using Asp.Versioning.Routing;
var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
logger.Debug("init main");
try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddControllers();
    
    builder.Services.AddApiVersioning();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();
    #region export webapi
    //WebApiExportToFile.Extensions.AddExport(builder.Services);
    builder.Services.AddExport();
    #endregion

    #region links
    builder.Services.AddShortUrl();
    #endregion
    #region usefull endpoints
    builder.Services.AddSingleton<MiddlewareShutdown>();
    #endregion
    builder.Logging.ClearProviders();
    builder.Host.UseNLog();

    builder.Services.AddScoped<IPowershellAPI, MyPowershellAPI>();
    var app = builder.Build();

    // Configure the HTTP request pipeline.
    //if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
        app.UseSwaggerUI();
    }
    //WebApiExportToFile.Extensions.UseExport(app);
    app.UseExport();
    #region links
    app.UseShortUrl();
    #endregion
    //app.UseHttpsRedirection();
    #region usefull endpoints
    app.MapUsefullAll();
    app.MapHostedServices(app.Services.GetServices<IHostedService>().ToArray());
    //app.MapUsefullConfiguration();
    #endregion
    //app.UseAuthorization();
    #region blockly
    app.UseBlocklyUI(app.Environment);
    #endregion
    app.MapControllers();
    #region blockly
    app.UseBlocklyAutomation();
    #endregion

    #region ams
    app.UseAMS();
    #endregion

    #region links
    app.MapShortUrlEndpoints();
    #endregion
    app.Run();
}
catch(Exception ex)
{
    logger.Error(ex, "Stopped program because of exception");
    throw;
}
finally
{
    NLog.LogManager.Flush();
    NLog.LogManager.Shutdown();
}