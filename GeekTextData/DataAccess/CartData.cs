using GeekTextData.Models;
using GeekTextData.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.DataAccess
{
    public class CartData
    {

        //Gets the Cart by UserId
        public List<CartModel> GetCartByUserId(int Id)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Id };

            var output = sql.LoadData<CartModel, dynamic>("dbo.spGetUserCart", p, "GeekTextDB");

            return output;
        }

        //Gets the Saved for Later books by UserId
        public List<CartModel> GetSavedForLaterByUserId(int Id, bool IsSavedForLater)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Id, IsSavedForLater };

            var output = sql.LoadData<CartModel, dynamic>("dbo.spGetUserCart", p, "GeekTextDB");

            return output;
        }

        //Posts an item to a user's cart
        public void PostItemCart(int userId, int bookId)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { userId, bookId};
            
            sql.SaveData("dbo.spPostItemCart", p, "GeekTextDB");
        }

        public void CheckoutCart(int userId)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { userId};

            sql.SaveData("dbo.spCheckout", p, "GeekTextDB");
        }

        public void DeleteItemCart(int userId, int bookId)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { userId, bookId };

            sql.SaveData("dbo.spDeleteItemCart", p, "GeekTextDB");
        }

        public void UpdateItemQuantity(int userId, int bookId, int quantity)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { userId, bookId, quantity };

            sql.SaveData("dbo.spUpdateItemQuantityCart", p, "GeekTextDB");
        }

        public void UpdateItemSavedForLater(int userId, int bookId, bool IsSavedForLater)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { userId, bookId, IsSavedForLater };

            sql.SaveData("dbo.spUpdateItemSavedForLaterCart", p, "GeekTextDB");
        }

    }
}
