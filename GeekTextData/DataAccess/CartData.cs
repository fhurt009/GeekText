using GeekTextData.Models;
using GeekTextData.Sql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.DataAccess
{
    public class CartData
    {
        public List<CartModel> GetCartByUserId(int Id)
        {
            SqlDataAccess sql = new SqlDataAccess();

            var p = new { Id = Id };

            var output = sql.LoadData<CartModel, dynamic>("dbo.spGetUserCart", p, "GeekTextDB");

            return output;
        }

    }
}
