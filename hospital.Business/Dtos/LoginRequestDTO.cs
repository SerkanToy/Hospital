﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Business.Dtos
{
    public class LoginRequestDTO
    {
        public string Email { get; set; } = null!;
        public string Passwrd { get; set; } = null!;
    }
}
