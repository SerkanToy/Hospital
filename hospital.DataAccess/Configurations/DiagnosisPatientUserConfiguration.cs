using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations
{
    public class DiagnosisPatientUserConfiguration : IEntityTypeConfiguration<DiagnosisPatientUser>
    {
        public void Configure(EntityTypeBuilder<DiagnosisPatientUser> builder)
        {
            builder.HasKey(rc => new { rc.UserId, rc.PatientId, rc.DiagnosisId });
            builder.HasOne(rc => rc.User)
                .WithMany(u => u.DiagnosisPatientUsers)
                .HasForeignKey(rc => rc.UserId)
                .OnDelete(DeleteBehavior.NoAction);
            builder.HasOne(rc => rc.Patient)
                .WithMany(p => p.DiagnosisPatientUsers)
                .HasForeignKey(rc => rc.PatientId)
                .OnDelete(DeleteBehavior.NoAction);
            builder.HasOne(rc => rc.Diagnosis).WithMany(d => d.DiagnosisPatientUsers)
                .HasForeignKey(rc => rc.DiagnosisId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
