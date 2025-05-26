using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace hospital.Core.Models
{
    public class ApiResponse
    {
        public ApiResponse()
        {
            ErrorMessage = new List<string>();
            StatusCode = HttpStatusCode.OK;
            isSuccess = true;
            Result = new object();
        }
        public HttpStatusCode StatusCode { get; set; }
        public bool isSuccess { get; set; }
        public List<string> ErrorMessage { get; set; }
        public object Result { get; set; }
        public IEnumerable<object> Results { get; set; }
    }
}
