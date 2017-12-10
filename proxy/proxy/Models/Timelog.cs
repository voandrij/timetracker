using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace proxy.Models
{
    public class Timelog
    {
        public string Id { get; set; }
        public DateTime TimeStarted { get; set; }
        public DateTime TimeFinished { get; set; }
        [Required]
        public string Status { get; set; }
    }
}
