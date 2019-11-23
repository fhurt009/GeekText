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
    [RoutePrefix("api/BookDetail")]
    public class BookDetailController : ApiController
    {
        [Route("{id}")]
        public bookDetailModel GetBookDetail([FromUri] int id)
        {
            BookDetailData data = new BookDetailData();
            return data.GetBookDetail(id)[0];
        }

        [Route("AuthorList/{id}")]
        public List<bookDetailModel> GetBookList([FromUri] int id)
        {
            BookDetailData data = new BookDetailData();
            List<bookDetailModel> list = data.GetBookList(id);
            return list;
        }

        [Route("AuthorID/{id}")]
        public bookDetailModel GetBookAuthorId([FromUri] int id)
        {
            BookDetailData data = new BookDetailData();
            return data.GetBookAuthorId(id)[0];
        }

    }

}