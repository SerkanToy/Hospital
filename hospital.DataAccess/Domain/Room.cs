namespace hospital.DataAccess.Domain
{
    public class Room
    {
        public Room()
        {
            Id = Guid.NewGuid().ToString();
            CreatedBy = "Sistem";
            CreatedDate = DateTime.Now;
            IsDeleted = false;
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public ICollection<RoomAndPatient> RoomAndPatients { get; set; } = new List<RoomAndPatient>();  
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
