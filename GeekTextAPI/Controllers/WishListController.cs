using GeekTextData.DataAccess;
using GeekTextData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace GeekTextAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class WishListController : ApiController
    {
        [HttpPost]
        [Route("api/wishList/create")]
        public List<string> createWishList(int id, string wishListName)
        {
            WishListData data = new WishListData();

            return data.createWishList(id, wishListName);
        }

        [HttpPost]
        [Route("api/wishList/addItem")]
        public List<string> addItemToWishList(int id, int bookId, string wishListName)
        {
            WishListData data = new WishListData();

            return data.addItemToWishList(id, bookId, wishListName);
        }

        // POST: api/Cart
        [HttpDelete]
        [Route("api/wishList/removeItem")]
        public List<string> removeItemFromWishList(int id, int bookId, string wishListName)
        {
            WishListData data = new WishListData();

            return data.removeItemFromWishList(id, bookId, wishListName);
        }

        // POST: api/Cart
        [HttpPost]
        [Route("api/wishList/transferItem")]
        public List<string> transferItemFromWishList(int id, int bookId, 
            string wishListNameOrigin, string wishListNameDestination)
        {
            WishListData data = new WishListData();

            return data.transferItemFromWishList(id, bookId, wishListNameOrigin, wishListNameDestination);
        }

        [HttpGet]
        [Route("api/wishList/getBooks")]
        public List<WishlistBookModel> getWishListBooks(int UserId, string wishListName)
        {
            WishListData data = new WishListData();

            return data.getWishListBooks(UserId, wishListName);
        }

        [HttpGet]
        [Route("api/wishList")]
        public List<WishlistModel> getUserWishList(int UserId)
        {
            WishListData data = new WishListData();

            return data.getUserWishList(UserId);
        }

        [HttpDelete]
        [Route("api/wishList/delete")]
        public List<string> deleteUserWishList(int id, string wishListName)
        {
            WishListData data = new WishListData();

            return data.deleteUserWishList(id, wishListName);
        }
    }
}
