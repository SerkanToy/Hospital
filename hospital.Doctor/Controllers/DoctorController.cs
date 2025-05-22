using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hospital.Doctor.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {

        public DoctorController()
        {
            
        }
        // GET: api/<DoctorController>
        [HttpGet]
        public IEnumerable<string> All()
        {
            return new string[] { "value1", "value2" };
        }
        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public string FindById(int id)
        {
            return "value";
        }
        // POST api/<DoctorController>
        [HttpPost]
        public void Create([FromBody] string value)
        {
        }
        // PUT api/<DoctorController>/5
        [HttpPut("{id}")]
        public void Update(int id, [FromBody] string value)
        {
        }
        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
