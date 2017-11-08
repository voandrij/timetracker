using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using proxy.Models;
using proxy.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proxy.Controllers
{
    [Route("api/[controller]")]
    public class ProjectsController : Controller
    {
        IProjectRepository projectRepository;

        [HttpGet]
        public IEnumerable<Project> GetAll()
        {
            return this.projectRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetProject")]
        public IActionResult GetById(int id)
        {
            return new ObjectResult(this.projectRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]Project project)
        {
            return CreatedAtRoute("GetProject", new { id = project.Id}, this.projectRepository.Create(project));
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]Project project)
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
