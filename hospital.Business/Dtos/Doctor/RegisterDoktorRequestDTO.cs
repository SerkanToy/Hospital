using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Business.Dtos.Doctor
{
    public class RegisterDoktorRequestDTO
    {
        public RegisterDoktorRequestDTO()
        {
            UserType = "doctor";
        }

        public string Email { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string Password { get; set; }
        public string UserType { get; set; }
        public string PhoneNumber { get; set; }
        public string TCNo { get; set; }
        public string? FullName { get; set; } = null;
    }
}
