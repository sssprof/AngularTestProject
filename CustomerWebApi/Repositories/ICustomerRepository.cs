namespace CustomerWebApi
{
    public interface ICustomerRepository
    {
        int AddNewCustomer(CustomerModel customer);
        public List<CustomerEntity> GetAllCustomerData();
        CustomerEntity GetCustomerDataById(int Id);
        int DeleteCustomerDataById(int Id);

    }

}