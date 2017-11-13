using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace proxy.Models
{
    public class Task
    {
        public long Id { get; set; }
        public int SeqNumber { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public string Priority { get; set; }
    }
}
