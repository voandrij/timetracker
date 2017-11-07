using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Backend.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        ITaskRepository taskRepository;

        [HttpGet]
        public IEnumerable<Task> GetAll()
        {
            return this.taskRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetTask")]
        public IActionResult GetById(int id)
        {
            return new ObjectResult(this.taskRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]Task task)
        {
            return CreatedAtRoute("GetTask", new { id = task.Id }, this.taskRepository.Create(task));
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Task task)
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
