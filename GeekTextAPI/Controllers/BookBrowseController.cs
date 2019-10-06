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
    public class BookBrowseController : ApiController
    {

        public List<BookBrowseModel> GetByRating(int Rating, string Sort)
        {
            BookBrowseData data = new BookBrowseData();
            return data.GetBooksByRating(Rating, Sort);
        }

        /*
        // GET: api/BookBrowse
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/BookBrowse/5
        public string Get(int id)
        {
            return "value";
        }
        */

        // POST: api/BookBrowse
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/BookBrowse/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/BookBrowse/5
        public void Delete(int id)
        {
        }
    }
}
