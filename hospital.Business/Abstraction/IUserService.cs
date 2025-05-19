using hospital.Business.Dtos;
using hospital.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Business.Abstraction
{
    public interface IUserService
    {
        Task<ApiResponse> Register(RegisterRequestDTO model);
        Task<ApiResponse> Login(LoginRequestDTO model);
    }
}
