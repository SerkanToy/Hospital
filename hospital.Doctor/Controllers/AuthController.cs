using hospital.Business.Abstraction;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace hospital.Doctor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService userService;
        public AuthController(IUserService userService)
        {
            this.userService = userService;
        }
    }
}
