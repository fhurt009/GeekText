using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GeekTextData.DataAccess;
using GeekTextData.Models;
using System.Web.Http.Cors;
using Newtonsoft.Json.Linq;

namespace GeekTextAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        [HttpGet]
        [Route("api/user/login")]
        public List<UserModel> getUser(string username, string password)
        {
            UserData data = new UserData();

            return data.check_login(username, password);
        }

        [HttpGet]
        [Route("api/user/uniqueUsername")]
        public List<UserModel> getUniqueUsername(string username)
        {
            UserData data = new UserData();

            return data.unique_username(username);
        }

        [HttpGet]
        [Route("api/user/pwMatch")]
        public List<UserModel> getPwMatch(int id, string password)
        {
            UserData data = new UserData();

            return data.pwMatch(id, password);
        }

        [HttpPost]
        [Route("api/user/register")]
        public void postUser([FromBody] JObject obj)
        {
            UserData data = new UserData();

            string username = obj["username"].Value<string>();
            string password = obj["password"].Value<string>();
            string email = obj["email"].Value<string>();
            string firstname = obj["firstname"].Value<string>();
            string lastname = obj["lastname"].Value<string>();

            data.register(username, password, email, firstname, lastname);
        }

    }
}
