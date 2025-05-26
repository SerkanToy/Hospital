using hospital.DataAccess.Context.UserFolder;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasKey(x => x.Id);
            //builder.HasMany(x => x.UserRoles).WithOne(y => y.Role);
            builder.ToTable("Role");
            builder.HasData(new[]
                {
                    new Role
                    {
                        Id = "4D1CBDE2-3279-467C-B211-499CA8A92D24",
                        NormalizedName = "ADMIN",
                        Name = "admin",
                        ConcurrencyStamp = "E2E87E8F-C71B-481C-97BA-701E6D4FEC8F"
                    },
                    new Role
                    {
                        Id = "51076DDD-8EED-4127-AAFD-0784CACDB74D",
                        NormalizedName = "USER",
                        Name = "user",
                        ConcurrencyStamp = "96FE0FFC-B075-4D0C-9DD2-083109759D61"
                    }
                    ,
                    new Role
                    {
                        Id = "9B79C69F-26D0-492A-A420-FAE2CE1DFFB1",
                        NormalizedName = "DOCTOR",
                        Name = "doctor",
                        ConcurrencyStamp = "71210ABB-BF25-4C3B-B03A-65FA8995EBBE"
                    }
                });
        }
    }
}
