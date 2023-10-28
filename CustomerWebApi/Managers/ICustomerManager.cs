namespace CustomerWebApi.Managers
{
    public interface ICustomerManager
    {
        List<CustomerEntity> GetAllCustomerData();

        CustomerEntity GetCustomerDataById(int Id);
        int DeleteCustomerDataById(int Id);

    }
}