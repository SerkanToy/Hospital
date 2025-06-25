using AutoMapper;
using hospital.Business.Abstraction;
using hospital.Business.Dtos;
using hospital.Core.Models;
using hospital.DataAccess.Context.UserFolder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;

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
        public async Task<ApiResponse> Login(LoginRequestDTO model)
        {
            User user = await userManager.FindByEmailAsync(model.Email);
            if (user is not null)
            {
                bool isPasswordValid = await userManager.CheckPasswordAsync(user, model.Passwrd);

                if(!isPasswordValid)
                {
                    apiResponse.StatusCode = HttpStatusCode.BadRequest;
                    apiResponse.ErrorMessage.Add("Kullanıcı veya Şifre Yanlış");
                    apiResponse.isSuccess = false;
                    return apiResponse;
                }

                var roles = await userManager.GetRolesAsync(user);
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
                byte[] key = System.Text.Encoding.ASCII.GetBytes(TokenKey);
                SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor()
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("FullName", $"{user.Name} {user.SurName}"),
                        new Claim(ClaimTypes.NameIdentifier, user.Id),
                        new Claim(ClaimTypes.Email, user.Email),
                        new Claim(ClaimTypes.Name, user.UserName),
                        new Claim(ClaimTypes.Role, string.Join(",", roles))
                    }),
                    Expires = DateTime.UtcNow.AddDays(7),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
                };

                SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);

                LoginResponseModel loginResponseModel = new LoginResponseModel()
                {
                    Token = tokenHandler.WriteToken(token),
                    Email = user.Email,
                };
                apiResponse.StatusCode = HttpStatusCode.OK;
                apiResponse.isSuccess = true;
                apiResponse.Result = loginResponseModel;
                return apiResponse;
            }

            apiResponse.StatusCode = HttpStatusCode.BadRequest;
            apiResponse.ErrorMessage.Add("Kullanıcı veya Şifre Yanlış");
            apiResponse.isSuccess = false;
            return apiResponse;
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

        public async Task<ApiResponse> Update(RegisterRequestDTO model)
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
