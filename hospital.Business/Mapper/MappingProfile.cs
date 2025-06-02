using AutoMapper;
using hospital.Business.Dtos;
using hospital.Business.Dtos.Doctor;
using hospital.Core.Models;
using hospital.DataAccess.Context.UserFolder;

namespace hospital.Business.Mapper
{
    public class MappingProfile : Profile //<TSource,TDestination> : Profile where TSource : class
    {
        public MappingProfile()
        {
            CreateMap<User, RegisterRequestDTO>().ReverseMap();
            CreateMap<User, LoginRequestDTO>().ReverseMap();
            CreateMap<User,UpdateDoktorRequestDTO>().ReverseMap();
            CreateMap<User, DeleteDoktorRequestDTO>().ReverseMap();
        }
    }
}
