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

        public List<string> addItemToWishList(int UserId, int bookId, string wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId, bookId, wishListName };

            var output = sql.LoadData<string, dynamic>("dbo.addItemWishList", p, "GeekTextDB");

            return output;
        }

        public List<string> removeItemFromWishList(int UserId, int bookId, string wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId, bookId, wishListName };

            var output = sql.LoadData<string, dynamic>("dbo.removeItemWishList", p, "GeekTextDB");

            return output;
        }

        public List<string> transferItemFromWishList(int UserId, int bookId, 
            string WishListName_a, string WishListName_b)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId, bookId, WishListName_a, WishListName_b };

            var output = sql.LoadData<string, dynamic>("dbo.transferItemWishList", p, "GeekTextDB");

            return output;
        }

        public List<WishlistBookModel> getWishListBooks(int UserId, string wishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId, wishListName };

            var output = sql.LoadData<WishlistBookModel, dynamic>("dbo.getUserWishListBooks", p, "GeekTextDB");

            return output;
        }

        public List<WishlistModel> getUserWishList(int UserId)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId};

            var output = sql.LoadData<WishlistModel, dynamic>("dbo.getUserWishList", p, "GeekTextDB");

            return output;
        }

        public List<string> deleteUserWishList(int UserId, string WishListName)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { UserId, WishListName };

            var output = sql.LoadData<string, dynamic>("dbo.deleteUserWishList", p, "GeekTextDB");

            return output;
        }

    }
}
