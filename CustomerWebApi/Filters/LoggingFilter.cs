using Microsoft.AspNetCore.Mvc.Filters;

namespace CustomerWebApi
{
    public class LoggingFilter : IActionFilter
    {
        private readonly ILogger<LoggingFilter> _logger;

        public LoggingFilter(ILogger<LoggingFilter> logger)
        {
            _logger = logger;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            // Code to be executed before the action method
            _logger.LogInformation("Executing action: {ActionName}", context.ActionDescriptor.DisplayName);
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
            // Code to be executed after the action method
            if (context.Exception == null)
            {
                _logger.LogInformation("Executed action: {ActionName}", context.ActionDescriptor.DisplayName);
            }
        }
    }
}