using hospital.DataAccess.Context.UserFolder;
using System.ComponentModel.DataAnnotations.Schema;

namespace hospital.DataAccess.Domain
{
    public class UserTitle
    {
        public UserTitle()
        {
            Date = DateOnly.FromDateTime(DateTime.Now);
            Time = TimeOnly.FromDateTime(DateTime.Now);
        }
        public string UserId { get; set; }
        public User User { get; set; }
        public string TitleId { get; set; }
        public Title Title { get; set; }
        public DateOnly Date { get; set; }
        public TimeOnly Time { get; set; }
    }
}
