using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations
{
    public class MedicineConfiguration : IEntityTypeConfiguration<Medicine>
    {
        public void Configure(EntityTypeBuilder<Medicine> builder)
        {
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Name).IsRequired().HasMaxLength(500);
            builder.Property(a => a.CreatedBy).IsRequired().HasMaxLength(100);
            builder.Property(a => a.CreatedDate).IsRequired();
            builder.Property(a => a.IsDeleted).IsRequired().HasDefaultValue(false);
            builder.HasOne(a => a.Patient).WithMany(p => p.Medicine).HasForeignKey(a => a.PatientId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
