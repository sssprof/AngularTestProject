using System.Data;
using Dapper;

namespace CustomerWebApi
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly DapperContext _dapperContext;

        public CustomerRepository(DapperContext dapperContext)
        {
            _dapperContext = dapperContext;
        }

        public int AddNewCustomer(CustomerModel customer)
        {
            var parameters = new
            {
                FirstName = customer.FirstName,
                LastName = customer.LastName,
                Email = customer.Email,
                PhoneNumber = customer.PhoneNumber,
                CountryCode = customer.CountryCode,
                Gender = customer.Gender,
                Balance = customer.Balance
            };

            // Call the stored procedure using Dapper
            using (var connection = _dapperContext.CreateConnection())
            {
                return connection.Execute("InsertCustomerData", parameters, commandType: CommandType.StoredProcedure);
            }
        }
        public List<CustomerEntity> GetAllCustomerData()
        {
            var query = "SELECT * FROM CustomerInfo";
            using (var connection = _dapperContext.CreateConnection())
            {
                return connection.Query<CustomerEntity>(query).ToList();
            }
        }

        public CustomerEntity GetCustomerDataById(int Id)
        {
            var query = "SELECT * FROM CustomerInfo WHERE Id = " + Id;
            using (var connection = _dapperContext.CreateConnection())
            {
                return connection.Query<CustomerEntity>(query).FirstOrDefault();
            }
        }

        public int DeleteCustomerDataById(int Id)
        {
            var query = "DELETE FROM CustomerInfo WHERE Id = " + Id;
            using (var connection = _dapperContext.CreateConnection())
            {
                return connection.Query<int>(query).FirstOrDefault();
            }
        }


    }
}