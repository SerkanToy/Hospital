using Microsoft.AspNetCore.Identity;

namespace hospital.DataAccess.Context.UserFolder
{
    public class RoleClaim : IdentityRoleClaim<string>
    {
        public RoleClaim() { }
    }
}
