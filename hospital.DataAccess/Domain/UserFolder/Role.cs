using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.DataAccess.Context.UserFolder
{
    public class Role: IdentityRole<string>
    {
        public Role()
        {
            //Id = Guid.NewGuid().ToString();
        }
        [NotMapped]
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
