namespace CustomerWebApi.Managers
{
    public class CustomerManager : ICustomerManager
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerManager(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }
        public List<CustomerEntity> GetAllCustomerData()
        {
            return _customerRepository.GetAllCustomerData();
        }
    }
}