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
        public List<CustomerEntity>  GetAllCustomerData()
        {
            var query = "SELECT * FROM CustomerInfo";
            using (var connection = _dapperContext.CreateConnection())
            {
                return connection.Query<CustomerEntity>(query).ToList();
            }
        }
    }
}