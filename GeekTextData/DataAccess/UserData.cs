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
        public List<UserModel> check_login(string username, string password)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { username, password };

            List<UserModel> output = sql.LoadData<UserModel, dynamic>("dbo.check_login", p, "GeekTextDB");

            return output;
        }

    }
}
