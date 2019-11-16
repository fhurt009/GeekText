using GeekTextData.Models;
using GeekTextData.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.DataAccess
{
    public class BookBrowseData
    {
        public List<GenreModel> GetAllGenres()
        {
            SqlDataAccess sql = new SqlDataAccess();

            var output = sql.LoadData<GenreModel, dynamic>("dbo.uspGetAllGenres", null, "GeekTextDB");

            return output;
        }

        public List<BookBrowseModel> GetBooksByTopSellers(bool SortAuthors)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { SortAuthors };

            var output = sql.LoadData<BookBrowseModel, dynamic>("dbo.uspGetBooksByTopSellers", p, "GeekTextDB");

            return output;
        }

        public List<BookBrowseModel> GetBooksByGenre(string Genre, bool SortAuthors)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Genre, SortAuthors };

            var output = sql.LoadData<BookBrowseModel, dynamic>("dbo.uspGetBooksByGenre", p, "GeekTextDB");
            
            return output;
        }

        public List<BookBrowseModel> GetBooksByRating(int Rating, bool SortAuthors)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Rating, SortAuthors };

            var output = sql.LoadData<BookBrowseModel, dynamic>("dbo.uspGetBooksByRating", p, "GeekTextDB");
            
            return output;
        }
    }
}