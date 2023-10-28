namespace CustomerWebApi.Managers
{
    public interface ICustomerManager
    {
        int AddNewCustomer(CustomerModel customer);
        List<CustomerEntity> GetAllCustomerData();
        CustomerEntity GetCustomerDataById(int Id);
        int DeleteCustomerDataById(int Id);
    }
}