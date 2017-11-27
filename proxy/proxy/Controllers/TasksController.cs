using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;
using Microsoft.AspNetCore.Mvc;
using proxy.Services;
using System.Net.Http;
using Newtonsoft.Json;

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
        public async System.Threading.Tasks.Task<IEnumerable<Task>> GetAll()
        {
            return await this._taskRepository.GetAll();
        }

        [HttpGet("[action]/{city}")]
        public async System.Threading.Tasks.Task<IActionResult> City(string city)
        {
            using (var client = new HttpClient())
            {

                client.BaseAddress = new Uri("http://api.openweathermap.org");
                var response = await client.GetAsync($"/data/2.5/weather?q={city}&appid=f29394556f9216314773f6bc03ff2b08&units=metric");
                response.EnsureSuccessStatusCode();

                var stringResult = await response.Content.ReadAsStringAsync();
                var rawWeather = JsonConvert.DeserializeObject<OpenWeatherResponse>(stringResult);
                return Ok(new
                {
                    Temp = rawWeather.Main.Temp,
                    Summary = string.Join(",", rawWeather.Weather.Select(x => x.Main)),
                    City = rawWeather.Name
                });


            }
        }

        [HttpGet("{id}", Name = "GetTask")]
        public IActionResult GetById(string id)
        {
            return new ObjectResult(this._taskRepository.GetById(id));
        }

        [HttpPost]
        public IActionResult Create([FromBody]Task task)
        {
            return Ok(task);
        }

        [HttpPut("{id}")]
        public IActionResult Update(string id, [FromBody]Task task)
        {
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            return new NoContentResult();
        }
    }
}
