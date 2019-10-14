﻿using GeekTextData.DataAccess;
using GeekTextData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GeekTextAPI.Controllers
{
    [RoutePrefix("api/BookBrowse")]
    public class BookBrowseController : ApiController
    {
        [Route("AllGenres")]
        public List<String> GetAllGenres()
        {
            BookBrowseData data = new BookBrowseData();
            return data.GetAllGenres();
        }

        [Route("TopSellers")]
        public List<BookBrowseModel> GetByTopSellers([FromUri] string SortBy)
        {
            BookBrowseData data = new BookBrowseData();
            List<BookBrowseModel> list = data.GetBooksByTopSellers(SortBy.ToLower().Equals("author"));
            return this.SortList(list, SortBy.ToLower());
        }

        [Route("Genre/{Genre}")]
        public List<BookBrowseModel> GetByGenre(string Genre, [FromUri] string SortBy)
        {
            BookBrowseData data = new BookBrowseData();
            List<BookBrowseModel> list = data.GetBooksByGenre(Genre, SortBy.ToLower().Equals("author"));
            return this.SortList(list, SortBy.ToLower());
        }

        [Route("Rating/{Rating}")]
        public List<BookBrowseModel> GetByRating(int Rating, [FromUri] string SortBy)
        {
            BookBrowseData data = new BookBrowseData();
            List<BookBrowseModel> list = data.GetBooksByRating(Rating, SortBy.ToLower().Equals("author"));
            return this.SortList(list, SortBy.ToLower());
        }

        private List<BookBrowseModel> SortList(List<BookBrowseModel> list, string SortBy)
        {
            IOrderedEnumerable<BookBrowseModel> ordered;

            // primary sort by specified sorting method
            switch (SortBy)
            {
                case "author":
                    ordered = list.OrderBy(b => b.Authors);
                    break;
                case "price":
                    ordered = list.OrderByDescending(b => b.RetailPrice);
                    break;
                case "rating":
                    ordered = list.OrderByDescending(b => b.Rating);
                    break;
                case "date":
                    ordered = list.OrderByDescending(b => b.ReleaseDate);
                    break;
                default:
                    ordered = list.OrderBy(b => b.Name);
                    break;
            }

            // secondary sort by book name
            return ordered.ThenBy(b => b.Name).ToList();
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
