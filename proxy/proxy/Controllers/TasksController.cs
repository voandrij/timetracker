using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;
using Microsoft.AspNetCore.Mvc;
using proxy.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proxy.Controllers
{
    [Route("api/[controller]")]
    public class TasksController : Controller
    {
        private readonly ITaskRepository _taskRepository;

        public TasksController(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        [HttpGet]
        public IEnumerable<Task> GetAll()
        {
            return this._taskRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetTask")]
        public IActionResult GetById(int id)
        {
            return new ObjectResult(this._taskRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]Task task)
        {
            return Ok(task);
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