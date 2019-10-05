using GeekTextData.DataAccess;
using GeekTextData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GeekTextAPI.Controllers
{
    public class CartController : ApiController
    {
        // GET: api/Cart/5
        //public List<CartModel> Get()
        //{
        //    CartData data = new CartData();

        //    return data.GetCartByUserId();
        //}
        public List<CartModel> GetById(int id)
        {
            CartData data = new CartData();

            return data.GetCartByUserId(id);
        }

        // GET: api/Cart/5

        // POST: api/Cart
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Cart/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Cart/5
        public void Delete(int id)
        {
        }
    }
}
