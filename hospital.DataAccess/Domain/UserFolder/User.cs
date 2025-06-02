using hospital.DataAccess.Domain;
using hospital.DataAccess.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.DataAccess.Context.UserFolder
{
    public class User : IdentityUser<string>
    {
        public User()
        {
            Id = Guid.NewGuid().ToString();
            CreatedBy = "Sistem";
            CreatedDate = DateTime.Now;
            IsDeleted = false;
            Sex = Gender.Man;
            ProfilImages = new List<ProfilImage>();
        }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string TCNo { get; set; }
        public Gender Sex { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<UserTitle>? UserTitle { get; set; }
        [NotMapped]
        public ICollection<UserRole>? UserRoles { get; set; }
        public ICollection<UserAndPatient> UserAndPatients { get; set; }
        public ICollection<Address> Addresses { get; set; }
        public ICollection<Description> Descriptions { get; set; }
        public ICollection<DiagnosisPatientUser> DiagnosisPatientUsers { get; set; }
        public ICollection<ProfilImage> ProfilImages { get; set; }
    }
}
