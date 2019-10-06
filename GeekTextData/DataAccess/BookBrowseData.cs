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
        public List<BookBrowseModel> GetBooksByRating(int Rating, string Sort)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Rating };

            string StoredProcedure;
            if (Sort.ToLower().Equals("author"))
            {
                StoredProcedure = "dbo.uspGetBooksByRatingSortedByAuthor";
            }
            else
            {
                StoredProcedure = "dbo.uspGetBooksByRatingSortedByName";
            }

            var output = sql.LoadData<BookBrowseModel, dynamic>(StoredProcedure, p, "GeekTextDB");

            return output;
        }
    }
}
