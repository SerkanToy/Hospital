using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class UserUnitConfiguration : IEntityTypeConfiguration<UserUnit>
    {
        public void Configure(EntityTypeBuilder<UserUnit> builder)
        {
            builder.HasKey(x => new { x.UserId, x.UnitId });
            builder.HasOne(up => up.Unit).WithMany(up => up.UserUnits).HasForeignKey(up => up.UnitId).OnDelete(DeleteBehavior.NoAction);          
            builder.HasOne(up => up.User).WithMany(up => up.UserUnits).HasForeignKey(up => up.UserId).OnDelete(DeleteBehavior.NoAction); 
        }
    }
}
