using hospital.DataAccess.Context.UserFolder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace hospital.DataAccess.Configurations.UserFolder
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired().HasMaxLength(100);
            builder.Property(x => x.SurName).IsRequired().HasMaxLength(100);
            builder.Property(x => x.PhoneNumber).IsRequired().HasMaxLength(20);
            builder.Property(x => x.Email).IsRequired().HasMaxLength(100);
            builder.Property(x => x.TCNo).IsRequired().HasMaxLength(11);
            builder.Property(x => x.NormalizedEmail).IsRequired().HasMaxLength(100);
            builder.HasMany(x => x.UserTitle).WithOne(y => y.User);
            builder.HasMany(x => x.UserAndPatients).WithOne(y => y.User).HasForeignKey(y => y.UserId).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(x => x.Addresses).WithOne(y => y.User).HasForeignKey(y => y.UserId).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(up => up.DiagnosisPatientUsers).WithOne(up => up.User).HasForeignKey(up => up.UserId).OnDelete(DeleteBehavior.NoAction);
            builder.HasMany(up => up.UserUnits).WithOne(up => up.User).HasForeignKey(up => up.UserId).OnDelete(DeleteBehavior.NoAction);
            builder.ToTable("User");

            User user = new User
            {
                Id = "23ECE5E4-0ECD-4D43-B382-6D0E1A4E54E8",
                Name = "Serkan",
                SurName = "TOY",
                Email = "stoy@windowslive.com",
                TCNo = "12345678901",
                NormalizedEmail = "STOY@WINDOWSLIVE.COM",
                PhoneNumber = "0522 698 56 98",
                UserName = "stoy",
                ConcurrencyStamp = "03A3D024-C9D5-4530-B640-C07A0C0DC164",
                SecurityStamp = "58B1F58C-F5F6-47C5-B673-AFEEE9B899E8",
                NormalizedUserName = "STOY"
            };
            user.PasswordHash = CreatePasswordHash(user, "Qwe123");
            builder.HasData(user);
        }

        private string CreatePasswordHash(User user, string password)
        {
            var passwordHash = new PasswordHasher<User>();
            return passwordHash.HashPassword(user, password);
        }
    }
}
