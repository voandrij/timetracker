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
    public class UsersController : Controller
    {
        IUserRepository userRepository;

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return this.userRepository.GetAll();
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetById(int id)
        {
            return new ObjectResult(this.userRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]User user)
        {
            return CreatedAtRoute("GetUser", new { id = user.Id }, this.userRepository.Create(user));
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]User user)
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
