namespace CustomerWebApi
{
    public interface ICustomerRepository
    {
        public List<CustomerEntity> GetAllCustomerData();
    }

}