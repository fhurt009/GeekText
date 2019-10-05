using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.Models
{
    public class CartModel
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public string Name { get; set; }
        public double RetailPrice { get; set; }
        public bool IsSavedForLater{ get; set; }
    }
}
