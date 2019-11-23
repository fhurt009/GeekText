using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GeekTextData.Models
{
    public class UserModel
    {
        public int id { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public string email { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string nickname { get; set; }
        public string is_taken { get; set; }
        public string matches { get; set; }
        public string cardnumber { get; set; }
        public string nameoncard { get; set; }
        public string csv { get; set; }
        public string expirationdate { get; set; }
    }
}
