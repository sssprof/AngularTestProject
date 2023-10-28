using Newtonsoft.Json;

namespace CustomerWebApi
{
    public class ExceptionMiddleware
    {
        private readonly RequestDelegate _requestDelegate;
        public ExceptionMiddleware(RequestDelegate requestDelegate)
        {
            _requestDelegate = requestDelegate;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _requestDelegate(context);
            }
            catch (Exception ex)
            {
                await HandleExceptionAsync(context, ex);
            }
        }

        private Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
 
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = StatusCodes.Status500InternalServerError;

            var errorMessage = new
            {
                Message = "An error occurred.",
                ExceptionMessage = exception.Message,
                StackTrace = exception.StackTrace
            };

            return context.Response.WriteAsync(JsonConvert.SerializeObject(errorMessage));
        }

    }
}