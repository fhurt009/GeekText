using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.Models
{
    public class CartModel
    {
        public int UserId { get; set; }
        public int BookId { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public double RetailPrice { get; set; }
        public int Quantity { get; set; }
        public bool IsSavedForLater{ get; set; }
    }
}
