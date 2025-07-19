using AutoMapper;
using hospital.Business.Abstraction;
using hospital.Business.Dtos;
using hospital.Business.Dtos.Doctor;
using hospital.Core.Models;
using hospital.DataAccess.Configurations.UserFolder;
using hospital.DataAccess.Context.UserFolder;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;

namespace hospital.Business.Concrete
{
    public class DoctorServis : IDoctorServis
    {
        private readonly ApiResponse apiResponse;
        private readonly UserManager<User> userManager;
        private readonly RoleManager<Role> roleManager;
        private string TokenKey;
        private readonly IMapper mapper;
        public DoctorServis(ApiResponse apiResponse, UserManager<User> userManager, IMapper mapper, RoleManager<Role> roleManager)
        {
            this.apiResponse = apiResponse;
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.mapper = mapper;
        }        
        
        public async Task<ApiResponse> Login(LoginDoktorRequestDTO model)
        {
            User user = await userManager.FindByEmailAsync(model.Email);
            if (user is not null)
            {
                bool isPasswordValid = await userManager.CheckPasswordAsync(user, model.Passwrd);

                if (!isPasswordValid)
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

        public async Task<ApiResponse> Register(RegisterDoktorRequestDTO model)
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
                CreatedBy = model.FullName,
                CreatedDate = DateTime.Now,
                TCNo = model.TCNo,
                IsDeleted = false
            };

            var result = await userManager.CreateAsync(createUser, model.Password);

            if (result.Succeeded)
            {
                IdentityResult result1 = userManager.AddToRoleAsync(createUser, "doctor").GetAwaiter().GetResult();
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

        public async Task<ApiResponse> Update(UpdateDoktorRequestDTO model)
        {
            if(model is null)
            { 
                return await Task.FromResult(new ApiResponse
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    isSuccess = false,
                    ErrorMessage = new List<string> { "Güncelleme için gerekli bilgiler eksik" }
                });
            }

            User user = userManager.Users.FirstOrDefault(x => x.Id == model.Id);

            if (user is null)
            {
                return await Task.FromResult(new ApiResponse
                {
                    StatusCode = HttpStatusCode.NotFound,
                    isSuccess = false,
                    ErrorMessage = new List<string> { "Kullanıcı bulunamadı" }
                });
            }

            user.Name = model.Name ?? user.Name;
            user.SurName = model.SurName ?? user.SurName;
            user.Email = model.Email ?? user.Email;
            user.UserName = model.Email?? user.UserName;
            user.PhoneNumber = model.PhoneNumber ?? user.PhoneNumber;
            user.TCNo = model.TCNo ?? user.TCNo;
            user.UpdatedBy = model.FullName;
            user.UpdateDate = DateTime.Now;
            user.SecurityStamp = Guid.NewGuid().ToString();
            user.ConcurrencyStamp = Guid.NewGuid().ToString();

            var result = userManager.UpdateAsync(user).GetAwaiter().GetResult();

            if (result.Succeeded)
            {
                apiResponse.StatusCode = HttpStatusCode.OK;
                apiResponse.isSuccess = true;
                apiResponse.Result = mapper.Map<UpdateDoktorRequestDTO>(user);
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
        
        public async Task<ApiResponse> Delete(DeleteDoktorRequestDTO model)
        {
            if (model is null)
            {
                return await Task.FromResult(new ApiResponse
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    isSuccess = false,
                    ErrorMessage = new List<string> { "Silme İşlemi Başarısız." }
                });
            }

            User user = userManager.Users.FirstOrDefault(x => x.Id == model.Id)!;

            if (user is null)
            {
                return await Task.FromResult(new ApiResponse
                {
                    StatusCode = HttpStatusCode.NotFound,
                    isSuccess = false,
                    ErrorMessage = new List<string> { "Kullanıcı bulunamadı" }
                });
            }

            user.IsDeleted = true;
            user.DeleteBy = model.FullName;
            user.DeleteDate = DateTime.Now;

            var result = userManager.UpdateAsync(user).GetAwaiter().GetResult();

            if (result.Succeeded)
            {
                apiResponse.StatusCode = HttpStatusCode.OK;
                apiResponse.isSuccess = true;
                apiResponse.Result = mapper.Map<DeleteDoktorRequestDTO>(user);
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
