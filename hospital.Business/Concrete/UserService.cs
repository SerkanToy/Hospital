using hospital.Business.Abstraction;
using hospital.Business.Dtos;
using hospital.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Business.Concrete
{
    public class UserService : IUserService
    {
        public Task<ApiResponse> Login(LoginRequestDTO model)
        {
            throw new NotImplementedException();
        }

        public Task<ApiResponse> Register(RegisterRequestDTO model)
        {
            throw new NotImplementedException();
        }
    }
}
