using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Business.Dtos.Doctor
{
    public class DeleteDoktorRequestDTO
    {
        public string Id { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string SurName { get; set; } = null!;
        public string Password { get; set; } = null!;
        public string UserType { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
    }
}
