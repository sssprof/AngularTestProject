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

        [HttpGet("Customers")]
        public ActionResult<List<CustomerModel>> GetName()
        {
           return Ok(_customerManager.GetAllCustomerData());
        }

        [HttpGet("CustomerById/{id}")]
        public ActionResult<CustomerModel> GetCustomerDataById(int id)
        {
           return Ok(_customerManager.GetCustomerDataById(id));
        }

        [HttpDelete("DeleteCustomer/{id}")]
        public ActionResult<int> DeleteCustomerDataById(int id)
        {
           return Ok(_customerManager.DeleteCustomerDataById(id));
        }

    }
}