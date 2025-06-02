using hospital.DataAccess.Context.UserFolder;
using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.DataAccess.Configurations
{
    public class UserAndPatientConfiguration : IEntityTypeConfiguration<UserAndPatient>
    {
        public void Configure(EntityTypeBuilder<UserAndPatient> builder)
        {
            builder.HasKey(up => new { up.UserId, up.PatientId });
            builder.HasOne(up => up.User).WithMany(u => u.UserAndPatients).HasForeignKey(up => up.UserId) .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
