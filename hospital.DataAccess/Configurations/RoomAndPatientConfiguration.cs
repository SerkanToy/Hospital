using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations
{
    public class RoomAndPatientConfiguration : IEntityTypeConfiguration<RoomAndPatient>
    {
        public void Configure(EntityTypeBuilder<RoomAndPatient> builder)
        {
            builder.HasKey(a => new { a.PatientId, a.RoomId });
            builder.Property(a => a.CreatedBy).IsRequired().HasMaxLength(50);
            builder.Property(a => a.CreatedDate).IsRequired();
            builder.Property(a => a.IsDeleted).IsRequired().HasDefaultValue(false);
            builder.HasOne(up => up.Room).WithMany(up => up.RoomAndPatients).OnDelete(DeleteBehavior.NoAction);
            builder.HasOne(up => up.Patient).WithMany(up => up.RoomAndPatients).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
