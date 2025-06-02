using hospital.DataAccess.Context.UserFolder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.DataAccess.Domain
{
    public class UserAndPatient
    {
        public string UserId { get; set; }
        public User User { get; set; }
        public string PatientId { get; set; }
        public Patient Patient { get; set; }
    }
}
