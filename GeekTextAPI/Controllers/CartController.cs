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
    public class CartController : ApiController
    {
        // GET: api/Cart/5
        //public List<CartModel> Get()
        //{
        //    CartData data = new CartData();

        //    return data.GetCartByUserId();
        //}
        [HttpGet]
        [Route("api/cart")]
        public List<CartModel> GetById(int id)
        {
            CartData data = new CartData();

            return data.GetCartByUserId(id);
        }

        // GET: api/Cart/5

        // POST: api/Cart
        [HttpPost]
        [Route("api/cart")]
        public void PostItem(int userId, [FromBody] int bookId)
        {
            CartData data = new CartData();

            data.PostItemCart(userId, bookId);
        }

        // PUT: api/Cart/5
        public void Put(int userId, int bookId, [FromBody]int quantity)
        {
            CartData data = new CartData();

            data.UpdateItemQuantity(userId, bookId, quantity);

        }

        [HttpPut]
        [Route("api/cart/saveForLater/{bookId}")]
        public void PutSaveForLater(int userId, int bookId, [FromBody]bool isSavedForLater)
        {
            CartData data = new CartData();

            data.UpdateItemSavedForLater(userId, bookId, isSavedForLater);

        }

        // DELETE: api/Cart/5
        [HttpDelete]
        [Route("api/cart")]
        public void DeleteCart(int userId)
        {
            CartData data = new CartData();

            data.DeleteCart(userId);
        }

        [HttpDelete]
        [Route("api/cart/{bookId}")]
        public void DeleteItemCart(int userId, int bookId)
        {
            CartData data = new CartData();

            data.DeleteItemCart(userId, bookId);
        }
    }
}
