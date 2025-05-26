using hospital.Business.Dtos;
using hospital.Business.Dtos.Doctor;
using hospital.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Business.Abstraction
{
    public interface IDoctorServis
    {
        Task<ApiResponse> Login(LoginDoktorRequestDTO model);
        Task<ApiResponse> Register(RegisterDoktorRequestDTO model);
        Task<ApiResponse> Update(UpdateDoktorRequestDTO model);
        Task<ApiResponse> Delete(DeleteDoktorRequestDTO model);
    }
}
