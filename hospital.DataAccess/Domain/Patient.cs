using hospital.DataAccess.Enums;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.DataAccess.Domain
{
    public class Patient
    {
        public Patient()
        {
            Id = Guid.NewGuid().ToString();
            CreatedBy = "Sistem";
            CreatedDate = DateTime.Now;
            IsDeleted = false;
            Addresses = new List<Address>();
            Descriptions = new List<Description>();
            Sex = Gender.Man;
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public string TCNo { get; set; }
        public Gender Sex { get; set; } // 0: Kadın, 1: Erkek, 2: Transvestit
        public ICollection<Description> Descriptions { get; set; }
        public ICollection<Address> Addresses { get; set; }
        public ICollection<UserAndPatient> UserAndPatients { get; set; }
        public ICollection<DiagnosisPatientUser> DiagnosisPatientUsers { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
