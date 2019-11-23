using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.Models
{
    
      public class bookDetailModel
      {
          public int    Id            { get; set; }
          public string Name          { get; set; }
          public string Description   { get; set; }
          public string ReleaseDate   { get; set; }
          public float  RetailPrice   { get; set; }
          public string CoverUrl      { get; set; }
          public string Genre         { get; set; }
          public string Author        { get; set; }
          public string PublisherName { get; set; }
          public int    AuthorId      { get; set; }

    }
    
}
