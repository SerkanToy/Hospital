using hospital.DataAccess.Context.UserFolder;

namespace hospital.DataAccess.Domain
{
    public class DiagnosisPatientUser
    {
        public string UserId { get; set; }
        public User User { get; set; }
        public string PatientId { get; set; }
        public Patient Patient { get; set; }
        public string DiagnosisId { get; set; }
        public Diagnosis Diagnosis { get; set; }
    }
}
