using GeekTextData.Models;
using GeekTextData.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.DataAccess
{
    public class BookDetailData
    {
        
            public List<bookDetailModel> GetBookDetail(int id)
            {
                SqlDataAccess sql = new SqlDataAccess();
                var p = new { id };
                var output = sql.LoadData< bookDetailModel, dynamic>("dbo.uspGetBookDetail", p, "GeekTextDB");

                return output;
            }

        public List<bookDetailModel> GetBookList(int id)
        {
            SqlDataAccess sql = new SqlDataAccess();
            var p = new { id };
            var output = sql.LoadData<bookDetailModel, dynamic>("dbo.uspGetAllAuthors", p, "GeekTextDB");
            return output;
        }

        public List<bookDetailModel> GetBookAuthorId(int id)
        {
            SqlDataAccess sql = new SqlDataAccess();
            var p = new { id };
            var output = sql.LoadData<bookDetailModel, dynamic>("dbo.uspGetAuthorId" , p, "GeekTextDB");
            return output;
        }

    }
}
