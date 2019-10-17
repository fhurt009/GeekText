using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.Models
{
    public class BookBrowseModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Authors { get; set; }
        public double Rating { get; set; }
        public int Reviews { get; set; }
        public double RetailPrice { get; set; }
        public string ReleaseDate { get; set; }
    }
}
