using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;
using Backend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class TimelogsController : Controller
    {
        ITimelogRepository timelogRepository;

        [HttpGet]
        public IEnumerable<Timelog> GetAll()
        {
            return this.timelogRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetTimelog")]
        public IActionResult GetById(int id)
        {
            return new ObjectResult(this.timelogRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]Timelog timelog)
        {
            return CreatedAtRoute("GetTimelog", new { id = timelog.Id }, this.timelogRepository.Create(timelog));
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Timelog timelog)
        {
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return new NoContentResult();
        }
    }
}
