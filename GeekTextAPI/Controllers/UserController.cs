using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GeekTextData.DataAccess;
using GeekTextData.Models;
using System.Web.Http.Cors;

namespace GeekTextAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("api/user")]
        public List<UserLogin> getUser(string username, string password)
        {
            UserData data = new UserData();

            return data.check_login(username, password);
        }

        public List<UserUnique> getUniqueUsername(string username)
        {
            UserData data = new UserData();

            return data.unique_username(username);
        }
    }
}
