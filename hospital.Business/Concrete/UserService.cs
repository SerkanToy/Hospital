using AutoMapper;
using hospital.Business.Abstraction;
using hospital.Business.Dtos;
using hospital.Core.Models;
using hospital.DataAccess.Context.UserFolder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Win32.SafeHandles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using hospital.DataAccess.Context;
using System.Net;

namespace hospital.Business.Concrete
{
    public class UserService : IUserService
    {
        private readonly ApiResponse apiResponse;
        //private readonly HospitalDatabase context;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private string TokenKey;
        private readonly IMapper mapper;
        public UserService(UserManager<User> userManager, RoleManager<Role> roleManager, ApiResponse apiResponse, IMapper mapper, IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.apiResponse = apiResponse;
            this.mapper = mapper;
            //this.context = context;
            TokenKey = configuration!.GetValue<string>("SecretKey:Key")!;
        }
        public Task<ApiResponse> Login(LoginRequestDTO model)
        {
            throw new NotImplementedException();
        }

        public async Task<ApiResponse> Register(RegisterRequestDTO model)
        {
            User user = await userManager.FindByEmailAsync(model.Email);

            if (user != null)
            {
                apiResponse.StatusCode = HttpStatusCode.BadRequest;
                apiResponse.ErrorMessage.Add("Mail Adresi Kayıtlı");
                apiResponse.isSuccess = false;
                return apiResponse;
            }

            User createUser = new User()
                {
                    Name = model.Name,
                    SurName = model.SurName,
                    Email = model.Email,
                    UserName = model.Email,
                    PhoneNumber = model.PhoneNumber,
                    CreatedBy = "Sistem",
                    CreatedDate = DateTime.Now,
                    IsDeleted = false
                };

            var result = await userManager.CreateAsync(createUser, model.Password);

            if (result.Succeeded)
            {
                IdentityResult result1 = userManager.AddToRoleAsync(createUser, model.UserType).GetAwaiter().GetResult();
                apiResponse.StatusCode = HttpStatusCode.Created;
                apiResponse.ErrorMessage = new List<string>();
                apiResponse.isSuccess = true;
                apiResponse.Result = new RegisterRequestDTO { Email = model.Email, PhoneNumber = model.PhoneNumber, Name = model.Name, SurName = model.SurName };
                return apiResponse;
            }

            result.Errors.ToList().ForEach(x =>
            {
                apiResponse.ErrorMessage.Add(x.Description);
            });
            apiResponse.StatusCode = HttpStatusCode.BadRequest;
            apiResponse.isSuccess = false;


            return apiResponse;
        }
    }
}
