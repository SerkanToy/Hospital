using hospital.DataAccess.Context.UserFolder;

namespace hospital.DataAccess.Domain
{
    public class UserUnit
    {
        public UserUnit()
        {
            CreatedBy = "Sistem";
            CreatedDate = DateTime.Now;
            IsDeleted = false;
        }
        public string UserId { get; set; }        
        public User User { get; set; }
        public string UnitId { get; set; }
        public Unit Unit { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
