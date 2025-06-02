using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations
{
    public class PatientConfiguration : IEntityTypeConfiguration<Patient>
    {
        public void Configure(EntityTypeBuilder<Patient> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Name).IsRequired().HasMaxLength(100);
            builder.Property(p => p.SurName).IsRequired().HasMaxLength(100);
            builder.Property(p => p.PhoneNumber).IsRequired().HasMaxLength(20);
            builder.Property(p => p.Email).IsRequired().HasMaxLength(100);
            builder.Property(p => p.TCNo).IsRequired().HasMaxLength(11);            
            builder.HasMany(up => up.UserAndPatients).WithOne(u => u.Patient).HasForeignKey(up => up.UserId).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(up => up.Addresses).WithOne(u => u.Patient).HasForeignKey(up => up.PatientId).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(up => up.Descriptions).WithOne(u => u.Patient).HasForeignKey(up => up.PatientId).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(up => up.DiagnosisPatientUsers).WithOne(up => up.Patient).HasForeignKey(up => up.PatientId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}
