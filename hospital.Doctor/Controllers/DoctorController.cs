using AutoMapper;
using hospital.Business.Abstraction;
using hospital.Business.Dtos.Doctor;
using hospital.Core.Models;
using hospital.DataAccess.Context.UserFolder;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;
using System.Security.Claims;

namespace hospital.Doctor.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private ApiResponse apiResponse;
        //private readonly HospitalDatabase context;
        private readonly UserManager<User> userManager;
        private readonly IDoctorServis doctorServis;
        private readonly IMapper mapper;

        public DoctorController(ApiResponse apiResponse, UserManager<User> userManager, IMapper mapper, IDoctorServis doctorServis)
        {
            this.apiResponse = apiResponse;
            this.mapper = mapper;
            this.doctorServis = doctorServis;
            this.userManager = userManager;
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
        [ActionName("doctor-getir")]
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
        [Authorize]
        public async Task<IActionResult> Create([FromBody] RegisterDoktorRequestDTO value)
        {
            if (value is null)
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.isSuccess = false;
                apiResponse.ErrorMessage.Add("Kayıt için gerekli bilgiler eksik");
                return BadRequest(apiResponse);
            }
            value.FullName = User.FindFirst(x => x.Type == "FullName")?.Value!;
            apiResponse = doctorServis.Register(value).Result;
            return Ok(apiResponse);

        }
        // PUT api/<DoctorController>/5
        [HttpPut()]
        [ActionName("doctor-guncelle")]
        public async Task<IActionResult> Update([FromBody] UpdateDoktorRequestDTO value)
        {
            if (value is null)
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.isSuccess = false;
                apiResponse.ErrorMessage.Add("Güncelleme için gerekli bilgiler eksik");
                return BadRequest(apiResponse);
            }
            value.FullName = User.FindFirst(x => x.Type == "FullName")?.Value!;
            apiResponse = doctorServis.Update(value).Result;
            return Ok(apiResponse);
        }
        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromBody] DeleteDoktorRequestDTO value)
        {
            if (value is null)
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.isSuccess = false;
                apiResponse.ErrorMessage.Add("Silme için gerekli bilgiler eksik");
                return BadRequest(apiResponse);
            }
            value.FullName = User.FindFirst(x => x.Type == "FullName")?.Value!;
            apiResponse = doctorServis.Delete(value).Result;
            return Ok(apiResponse);
            return Ok();
        }
    }
}
