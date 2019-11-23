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
        [Route("api/user/uniqueUsernameProf")]
        public List<UserModel> getUniqueUsernameProf(int id, string username)
        {
            UserData data = new UserData();

            return data.unique_username_prof(id, username);
        }

        [HttpGet]
        [Route("api/user/getUsersData")]
        public List<UserModel> getUser(int id)
        {
            UserData data = new UserData();

            return data.getUsersData(id);
        }

        [HttpPut]
        [Route("api/user/changeUsersData")]
        public void changeUser(int id, string username, string email, string firstname, string lastname, string nickname)
        {
            UserData data = new UserData();

            data.changeUsersData(id, username, email, firstname, lastname, nickname);
        }

        [HttpGet]
        [Route("api/user/pwMatch")]
        public List<UserModel> getPwMatch(int id, string password)
        {
            UserData data = new UserData();

            return data.pwMatch(id, password);
        }

        [HttpPut]
        [Route("api/user/changepw")]
        public void changePW(int id, string password)
        {
            UserData data = new UserData();

            data.changePW(id, password);
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

        [HttpPost]
        [Route("api/user/createCC")]
        public void createCard([FromBody] JObject obj)
        {
            UserData data = new UserData();

            int id = obj["id"].Value<int>();
            string cardnum = obj["cardnum"].Value<string>();
            string expiredate = obj["expiredate"].Value<string>();
            string cardname = obj["cardname"].Value<string>();
            string csv = obj["csv"].Value<string>();

            data.createCC(id, cardnum, expiredate, cardname, csv);
        }

        [HttpGet]
        [Route("api/user/getCC")]
        public List<UserModel> getCredit(int id)
        {
            UserData data = new UserData();

            return data.getCC(id);
        }

        [HttpPut]
        [Route("api/user/editCC")]
        public void editCredit(int id, string cardnum, string expiredate, string cardname, string csv)
        {
            UserData data = new UserData();

            data.editCC(id, cardnum, expiredate, cardname, csv);
        }

    }
}
