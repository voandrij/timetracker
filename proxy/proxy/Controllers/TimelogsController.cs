using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using proxy.Services;
using proxy.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proxy.Controllers
{
    [Route("api/[controller]")]
    public class TimelogsController : Controller
    {
        private readonly ITimelogRepository _timelogRepository;

        public TimelogsController(ITimelogRepository timelogRepository)
        {
            _timelogRepository = timelogRepository;
        }

        [HttpGet]
        public IEnumerable<Timelog> GetAll()
        {
            return this._timelogRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetTimelog")]
        public IActionResult GetById(int id)
        {
            return new ObjectResult(this._timelogRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]Timelog timelog)
        {
            return Ok(timelog);
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
