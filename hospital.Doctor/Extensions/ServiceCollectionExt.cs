using hospital.Business.Abstraction;
using hospital.Business.Concrete;
using hospital.Core.Models;

namespace hospital.Doctor.Extensions
{
    public static class ServiceCollectionExt
    {
        public static IServiceCollection AddApplicationLayer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IDoctorServis, DoctorServis>();
            services.AddScoped(typeof(ApiResponse));
            return services;
        }
    }
}
