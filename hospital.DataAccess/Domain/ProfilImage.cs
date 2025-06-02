using hospital.DataAccess.Context.UserFolder;

namespace hospital.DataAccess.Domain
{
    public class ProfilImage
    {
        public ProfilImage()
        {
            Id = Guid.NewGuid().ToString();
            CreatedBy = "Sistem";
            CreatedDate = DateTime.Now;
            IsDeleted = false;
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public bool IsShow { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public bool IsDeleted { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
