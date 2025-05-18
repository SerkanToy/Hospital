using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class UserTitleConfiguration : IEntityTypeConfiguration<UserTitle>
    {
        public void Configure(EntityTypeBuilder<UserTitle> builder)
        {
            builder.HasKey(x => new { x.UserId, x.TitleId });
            builder.HasOne(x => x.User).WithMany(y => y.UserTitle).IsRequired(false);
            builder.HasData(new UserTitle
            {
                TitleId = "C41F6994-710F-43FC-9D98-274462A21499",
                UserId = "23ECE5E4-0ECD-4D43-B382-6D0E1A4E54E8",
            });
        }
    }
}
