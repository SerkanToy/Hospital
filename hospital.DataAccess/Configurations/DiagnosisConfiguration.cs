using hospital.DataAccess.Context.UserFolder;
using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class DiagnosisConfiguration : IEntityTypeConfiguration<Diagnosis>
    {
        public void Configure(EntityTypeBuilder<Diagnosis> builder)
        {
            // Primary key
            builder.HasKey(uc => uc.Id);
            builder.HasMany(uc => uc.DiagnosisPatientUsers)
                .WithOne(up => up.Diagnosis)
                .HasForeignKey(up => up.DiagnosisId)
                .OnDelete(DeleteBehavior.NoAction);

        }
    }
}
