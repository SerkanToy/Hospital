using hospital.DataAccess.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class UnitConfiguration : IEntityTypeConfiguration<Unit>
    {
        public void Configure(EntityTypeBuilder<Unit> builder)
        {
            builder.HasKey(x => x.Id);
            builder.HasMany(up => up.UserUnits).WithOne(up => up.Unit).HasForeignKey(up => up.UnitId).OnDelete(DeleteBehavior.NoAction);          
            builder.HasMany(up => up.UnitRelations).WithOne(up => up.UnitRelation).HasForeignKey(up => up.UnitId).OnDelete(DeleteBehavior.NoAction);          
            builder.HasOne(up => up.UnitRelation).WithMany(up => up.UnitRelations).HasForeignKey(up => up.UnitId).OnDelete(DeleteBehavior.NoAction);          
            builder.HasData(new[]
            {
                new Unit
                {
                    Id = "A762A0A1-ADFA-4ECD-933E-6CB392E771B0",
                    Name = "Genel Cehrahi",
                },
                new Unit
                {
                    Id = "3FF542CF-F824-431E-93BD-0E32AF479FB3",
                    Name = "Ortapeti ve Travtoloji",
                },
                new Unit
                {
                    Id = "8375D41F-CD37-48D9-84CB-651C93DEF5F5",
                    Name = "Kardioloji",
                }
            });
        }
    }
}
