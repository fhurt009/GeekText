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
    [RoutePrefix("api/BookBrowse")]
    public class BookBrowseController : ApiController
    {
        [Route("AllBookNames")]
        public List<BookSearchModel> GetAllBookNames()
        {
            BookBrowseData data = new BookBrowseData();
            return data.GetAllBookNames();
        }

        [Route("AllGenres")]
        public List<GenreModel> GetAllGenres()
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
                case "priceasc":
                    ordered = list.OrderBy(b => b.RetailPrice);
                    break;
                case "pricedesc":
                    ordered = list.OrderByDescending(b => b.RetailPrice);
                    break;
                case "rating":
                    ordered = list.OrderByDescending(b => b.Rating);
                    break;
                case "dateasc":
                    ordered = list.OrderBy(b => b.ReleaseDate);
                    break;
                case "datedesc":
                    ordered = list.OrderByDescending(b => b.ReleaseDate);
                    break;
                case "sold":
                    ordered = list.OrderByDescending(b => b.UnitsSold);
                    break;
                default:
                    ordered = list.OrderBy(b => b.Name);
                    break;
            }

            // secondary sort by book name
            return ordered.ThenBy(b => b.Name).ToList();
        }
    }
}