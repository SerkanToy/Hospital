using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.DataAccess.Context.UserFolder
{
    public class UserRole: IdentityUserRole<string>
    {
        [NotMapped]
        public User? User { get; set; }
        [NotMapped]
        public Role? Role { get; set; }
        public bool Expired { get; set; }
    }
    
}
