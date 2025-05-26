using AutoMapper;
using hospital.Business.Abstraction;
using hospital.Business.Dtos;
using hospital.Core.Models;
using hospital.DataAccess.Context.UserFolder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace hospital.Doctor.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private ApiResponse apiResponse;
        //private readonly HospitalDatabase context;
        private readonly UserManager<User> userManager;
        private readonly IUserService userService;
        private readonly IDoctorServis doctorServis;
        private readonly IMapper mapper;

        public DoctorController(ApiResponse apiResponse, UserManager<User> userManager, IMapper mapper, IUserService userService, IDoctorServis doctorServis)
        {
            this.apiResponse = apiResponse;
            this.userManager = userManager;
            this.mapper = mapper;
            this.userService = userService;
            this.doctorServis = doctorServis;
        }
        // GET: api/<DoctorController>
        [HttpGet]
        [ActionName("doctorlar")]
        public async Task<IActionResult> All()
        {
            apiResponse.StatusCode = HttpStatusCode.OK;
            apiResponse.isSuccess = true;
            apiResponse.Results = await userManager.Users.ToListAsync();
            return Ok(apiResponse);
        }

        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        [ActionName("doctorbyid")]
        public async Task<IActionResult> FindById(string id = null)
        {
            if (id is null)
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.isSuccess = false;
                apiResponse.ErrorMessage.Add("Id boş olamaz");
                return BadRequest(apiResponse);
            }

            apiResponse.StatusCode = HttpStatusCode.OK;
            apiResponse.isSuccess = true;
            apiResponse.Result = await userManager.Users.FirstOrDefaultAsync(x => x.Id == id) ?? new() { Name = "Aradığınız Kırıterlerde Veri Bulunmamaktadır." };
            return Ok(apiResponse);
        }
        // POST api/<DoctorController>
        [HttpPost]
        [ActionName("doctor-kayit")]
        public async Task<IActionResult> Create([FromBody] RegisterRequestDTO value)
        {
            if (value is null)
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.isSuccess = false;
                apiResponse.ErrorMessage.Add("Kayıt için gerekli bilgiler eksik");
                return BadRequest(apiResponse);
            }

            apiResponse = userService.Register(value).Result;
            return Ok(apiResponse);

        }
        // PUT api/<DoctorController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.isSuccess = false;
                apiResponse.ErrorMessage.Add("Güncelleme için gerekli bilgiler eksik");
                return BadRequest(apiResponse);
            }
            return Ok();
            // Güncelleme işlemi burada yapılacak
            // Örnek: userService.Update(id, value);
        }
        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
