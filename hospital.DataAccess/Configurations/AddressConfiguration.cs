using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations
{
    public class AddressConfiguration : IEntityTypeConfiguration<Address>
    {
        public void Configure(EntityTypeBuilder<Address> builder)
        {
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Name).IsRequired().HasMaxLength(100);
            builder.Property(a => a.CreatedBy).IsRequired().HasMaxLength(50);
            builder.Property(a => a.CreatedDate).IsRequired();
            builder.Property(a => a.IsDeleted).IsRequired().HasDefaultValue(false);
            builder.HasOne(a => a.Patient).WithMany(p => p.Addresses).HasForeignKey(a => a.PatientId).OnDelete(DeleteBehavior.NoAction);
            builder.HasOne(a => a.User).WithMany(u => u.Addresses).HasForeignKey(a => a.UserId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
