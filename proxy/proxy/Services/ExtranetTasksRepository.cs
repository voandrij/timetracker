using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;
using System.Net.Http;
using Newtonsoft.Json.Linq;

namespace proxy.Services {
    public class ExtranetTasksRepository : ITaskRepository {
        public IEnumerable<Task> GetAll() {
            using (var client = new HttpClient()) {
                List<Task> tasks = new List<Task>();

                //Retrieving a JSON-Object
                var response = ExtranetUsersRepository.getResponseAsString("/api/ApiAlpha.ashx/w/TTI/a/TASK/tickets/list?&listOfFields=ALL&withTechnicalData=true").Result;
                
                var json = JObject.Parse(response);
                var results = json["data"].Children().ToList();

                //Serialization
                foreach (JToken t in results)
                {
                    Task task = t.ToObject<Task>();
                    tasks.Add(task);
                }

                return tasks;
            }
        }

        public Task GetById(string id) {
            var allTasks = GetAll();
            foreach (Task t in allTasks) {
                if (t.Id == id) {
                    return t;
                }  
            }
            return null;
        }
        public void Create(Task task) {
            throw new NotImplementedException();
        }
        public void Update(Task task) {
            throw new NotImplementedException();
        }
        public void Delete(string id) {
            throw new NotImplementedException();
        }
    }
    
}