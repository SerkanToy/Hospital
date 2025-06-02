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
                    Name = "Rektör",
                },
                new Title
                {
                    Id = "FBAD47AD-33B9-494F-BC4B-ACDEF3AFFF55",
                    Name = "Dekan",
                },
                new Title
                {
                    Id = "61A6F137-9518-48AF-AF35-AF1E9E40D4C4",
                    Name = "Dekan Yardımcısı",
                },
                new Title
                {
                    Id = "16AC51C7-0FF1-4C05-92EB-14F77836870B",
                    Name = "Doktor",
                },
                new Title
                {
                    Id = "1523BC77-0EF0-4074-B38E-38D515D47AA3",
                    Name = "Doçent",
                },
                new Title
                {
                    Id = "4CC7C710-6A04-4340-8404-2AB1D7B9E85E",
                    Name = "Doktora Öğretim Görevlisi",
                },
                new Title
                {
                    Id = "E86D6742-EB48-4224-A8FE-11B494CF2E44",
                    Name = "Öğretim Görevlisi",
                },
                new Title
                {
                    Id = "C46E4446-35A0-4613-ADCD-DE14F7F7B5BF",
                    Name = "Araştırma Görevlisi",
                },
                new Title
                {
                    Id = "C41F6994-710F-43FC-9D98-274462A21499",
                    Name = "Genel İdari Hizmetler",
                },
                new Title
                {
                    Id = "2BCD60CE-5B8C-4BB7-A0CB-F644B4CCC251",
                    Name = "Teknik Hizmetler",
                },
                new Title
                {
                    Id = "280BE429-059C-485E-B74D-34F8BD2314C4",
                    Name = "Yardımcı Hizmetler",
                }
            });
        }
    }
}
