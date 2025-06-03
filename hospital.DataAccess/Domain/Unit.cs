using hospital.DataAccess.Context.UserFolder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.DataAccess.Domain
{
    public class Unit
    {
        public Unit()
        {
            Id = Guid.NewGuid().ToString();
            CreatedBy = "Sistem";
            CreatedDate = DateTime.Now;
            IsDeleted = false;
            UserUnits = new List<UserUnit>();
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public ICollection<UserUnit> UserUnits { get; set; }
        public ICollection<Unit>? UnitRelations { get; set; }
        public string? UnitId { get; set; }
        public Unit? UnitRelation { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? UpdatedBy { get; set; }
        public DateTime? UpdateDate { get; set; }
        public string? DeleteBy { get; set; }
        public DateTime? DeleteDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
