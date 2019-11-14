using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GeekTextData.Models;
using GeekTextData.Sql;

namespace GeekTextData.DataAccess
{
    public class UserData
    {
        public List<UserLogin> check_login(string username, string password)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { username, password };

            List<UserLogin> output = sql.LoadData<UserLogin, dynamic>("dbo.check_login", p, "GeekTextDB");

            return output;
        }

        //FIXIT; hindering UserController > user.service
        public List<UserUnique> unique_username(string username) 
        { 

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { username };

            var output = sql.LoadData<UserUnique, dynamic>("dbo.unique_username", p, "GeekTextDB");

            return output;
        }
    }
}
