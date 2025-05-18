using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class TitleConfiguration : IEntityTypeConfiguration<Title>
    {
        public void Configure(EntityTypeBuilder<Title> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasMany(x => x.UserTitle).WithOne(y => y.Title).IsRequired(false);
            builder.HasData(new[]
            {
                new Title
                {
                    Id = "803C3369-6A06-46A6-8447-C9312AEAC659",
                    Name = "Baş Hekim",
                },
                new Title
                {
                    Id = "FBAD47AD-33B9-494F-BC4B-ACDEF3AFFF55",
                    Name = "Doktor",
                },
                new Title
                {
                    Id = "C41F6994-710F-43FC-9D98-274462A21499",
                    Name = "İdari",
                }
            });
        }
    }
}
