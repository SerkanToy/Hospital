using hospital.DataAccess.Context.UserFolder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{ 
    public class UserRoleConfiguration : IEntityTypeConfiguration<UserRole>
    {
        public void Configure(EntityTypeBuilder<UserRole> builder)
        {
            builder.HasKey(x => new { x.UserId, x.RoleId });
            /*builder.HasOne(x => x.User)
                .WithMany(y => y.UserRoles);
            builder.HasOne(x => x.Role)
                .WithMany(y => y.UserRoles);*/
            builder.ToTable("UserRole");
            builder.HasData(new UserRole
            {
                RoleId = "4D1CBDE2-3279-467C-B211-499CA8A92D24",
                UserId = "23ECE5E4-0ECD-4D43-B382-6D0E1A4E54E8"
            });
        }
    }
}
