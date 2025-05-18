using hospital.DataAccess.Context.UserFolder;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.DataAccess.Domain
{
    public class UserTitle
    {
        public UserTitle()
        {
            StartDate = DateTime.Now;
        }
        public string UserId { get; set; }
        public User? User { get; set; }
        public string TitleId { get; set; }
        public Title? Title { get; set; }
        public DateTime? StartDate { get; set; }
    }
}
