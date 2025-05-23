using hospital.Business.Abstraction;
using hospital.Business.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace hospital.Doctor.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserService userService;
        public AuthController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost(),ActionName(name: "giris-yap")]
        public async Task<IActionResult> LoginUser([FromBody] LoginRequestDTO model)
        {
            var response = await userService.Login(model);
            if (response.isSuccess)
            {
                return Ok(response);
            }
            return BadRequest(response);
        }

        [HttpPost(),ActionName(name: "kayit-ol")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterRequestDTO model)
        {
            var response = await userService.Register(model);
            if (response.isSuccess)
            {
                return Ok(response);
            }
            return BadRequest(response);
        }

    }
}
