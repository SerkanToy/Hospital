using hospital.Business.Dtos;
using hospital.Core.Models;

namespace hospital.Business.Abstraction
{
    public interface IUserService
    {
        Task<ApiResponse> Register(RegisterRequestDTO model);
        Task<ApiResponse> Login(LoginRequestDTO model);
    }
}
