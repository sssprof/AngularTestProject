using CustomerWebApi;
using CustomerWebApi.Managers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
    {
        options.AddPolicy("AllowLocalhost",
            builder => builder.WithOrigins("http://localhost:4200")
                              .AllowAnyHeader()
                              .AllowAnyMethod());
    });
builder.Services.AddScoped<ICustomerManager, CustomerManager>();
builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
builder.Services.AddSingleton<DapperContext>(); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowLocalhost"); // Apply CORS only in development
}


            
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();