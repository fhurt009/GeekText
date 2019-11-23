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

        public List<UserModel> getUsersData(int id)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id };

            var output = sql.LoadData<UserModel, dynamic>("dbo.getUsersData", p, "GeekTextDB");

            return output;
        }

        public void changeUsersData(int id, string username, string email, string firstname, string lastname, string nickname)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, username, email, firstname, lastname, nickname };

            sql.SaveData("dbo.changeUsersData", p, "GeekTextDB");
        }

        public List<UserModel> unique_username(string username) 
        { 

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { username };

            var output = sql.LoadData<UserModel, dynamic>("dbo.unique_username", p, "GeekTextDB");

            return output;
        }

        public List<UserModel> unique_username_prof(int id, string username)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, username };

            var output = sql.LoadData<UserModel, dynamic>("dbo.unique_username_prof", p, "GeekTextDB");

            return output;
        }

        public List<UserModel> pwMatch(int id, string password)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, password };

            var output = sql.LoadData<UserModel, dynamic>("dbo.check_password", p, "GeekTextDB");

            return output;
        }

        public void changePW(int id, string password)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id,  password };

            sql.SaveData("dbo.changepw", p, "GeekTextDB");
        }

        public void register(string username, string password, string email, string firstname, string lastname)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { username, password, email, firstname, lastname };
            
            sql.SaveData("dbo.register_user", p, "GeekTextDB");
        }

        public void createCC(int id, string cardnum, string expiredate, string cardname, string csv)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, cardnum, expiredate, cardname, csv };

            sql.SaveData("dbo.createCC", p, "GeekTextDB");
        }

        public List<UserModel> getCC(int id)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id };

            var output = sql.LoadData<UserModel, dynamic>("dbo.getCC", p, "GeekTextDB");

            return output;
        }

        public void editCC(int id, string cardnum, string expiredate, string cardname, string csv)
        {

            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, cardnum, expiredate, cardname, csv };

            sql.SaveData("dbo.editCC", p, "GeekTextDB");
        }
    }
}
