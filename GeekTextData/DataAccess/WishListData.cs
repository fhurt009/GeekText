using GeekTextData.Models;
using GeekTextData.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.DataAccess
{
    public class WishListData
    {

        //Gets the Cart by UserId
        public List<string> createWishList(int Id, String wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Id, wishListName };

            var output = sql.LoadData<string, dynamic>("dbo.createUserWishList", p, "GeekTextDB");

            return output;
        }

        public List<string> addItemToWishList(int id, int bookId, string wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, bookId, wishListName };

            var output = sql.LoadData<string, dynamic>("dbo.addItemWishList", p, "GeekTextDB");

            return output;
        }

        public List<string> removeItemFromWishList(int id, int bookId, string wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, bookId, wishListName };

            var output = sql.LoadData<string, dynamic>("dbo.removeItemWishList", p, "GeekTextDB");

            return output;
        }

        public List<string> transferItemFromWishList(int id, int bookId, 
            string wishListNameOrigin, string wishListNameDestination)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { id, bookId, wishListNameOrigin, wishListNameDestination };

            var output = sql.LoadData<string, dynamic>("dbo.transferItemWishList", p, "GeekTextDB");

            return output;
        }

        public List<WishListModel> getUserWishList(int UserId, string wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId, wishListName };

            var output = sql.LoadData<WishListModel, dynamic>("dbo.getUserWishList", p, "GeekTextDB");

            return output;
        }

    }
}
