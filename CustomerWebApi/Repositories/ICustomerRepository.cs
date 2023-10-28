namespace CustomerWebApi
{
    public interface ICustomerRepository
    {
        public List<CustomerEntity> GetAllCustomerData();
        CustomerEntity GetCustomerDataById(int Id);
    }

}