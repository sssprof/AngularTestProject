using CustomerWebApi.Managers;
using Microsoft.AspNetCore.Mvc;

namespace CustomerWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerManager _customerManager;
        public CustomerController(ICustomerManager customerManager)
        {
                _customerManager = customerManager;
        }

        [HttpGet()]
        public string GetName()
        {
           return _customerManager.GetCustomerName();
        }

    }
}