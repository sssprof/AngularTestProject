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

        public CustomerEntity GetCustomerDataById(int Id)
        {
            return _customerRepository.GetCustomerDataById(Id);
        }

        public int DeleteCustomerDataById(int Id)
        {
            return _customerRepository.DeleteCustomerDataById(Id);
        }

    }
}