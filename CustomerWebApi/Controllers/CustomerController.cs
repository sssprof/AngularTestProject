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


      [HttpPost("AddCustomer")]
      public ActionResult<int> AddNewCustomer(CustomerModel customer)
      {
         if (customer == null)
         {
            return BadRequest();
         }
         else
         {
            return Ok(_customerManager.AddNewCustomer(customer));
         }
      }

      [HttpGet("Customers")]
      public ActionResult<List<CustomerModel>> GetAllCustomerData()
      {
         return Ok(_customerManager.GetAllCustomerData());
      }

      [HttpGet("CustomerById/{id}")]
      public ActionResult<CustomerModel> GetCustomerDataById(int id)
      {
         if (id > 0)
         {
            return Ok(_customerManager.GetCustomerDataById(id));
         }
         else
         {
            return BadRequest();
         }
      }

      [HttpDelete("DeleteCustomer/{id}")]
      public ActionResult<int> DeleteCustomerDataById(int id)
      {
         if (id > 0)
         {
            return Ok(_customerManager.DeleteCustomerDataById(id));
         }
         else
         {
            return BadRequest();
         }
      }

   }
}