using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;
using System.Net.Http;
using Newtonsoft.Json;
using static proxy.Models.ExtranetTasksList;

namespace proxy.Services
{
    public class ExtranetTasksRepository : ITaskRepository
    {
        public async System.Threading.Tasks.Task<IEnumerable<Task>> GetAll()
        {
            using (var client = new HttpClient())
            {
                List<Task> tasks = new List<Task>();
                client.BaseAddress = new Uri("https://extranet.newtonideas.com");
                var response = await client.GetAsync("/api/ApiAlpha.ashx/w/TTI/a/TASK/tickets/list?&listOfFields=ALL&withTechnicalData=true");
                response.EnsureSuccessStatusCode();

                var stringResult = await response.Content.ReadAsStringAsync();
                //var stringResult = System.IO.File.ReadAllText(@"E:\a.txt");
                var extranetTasksList = JsonConvert.DeserializeObject<RootObject>(stringResult);
                for (int i = 0; i < extranetTasksList.data.Count; ++i)
                {
                    Task t = new Task();
                    t.Id = extranetTasksList.data.ElementAt(i).id;
                    t.Project_id = extranetTasksList.data.ElementAt(i).project_id;
                    t.SeqNumber = 0;
                    t.Title = extranetTasksList.data.ElementAt(i).title;
                    t.Description = extranetTasksList.data.ElementAt(i).description.ToString();
                    t.State = extranetTasksList.data.ElementAt(i).resolved_values.state;
                    t.Priority = extranetTasksList.data.ElementAt(i).priority;
                    tasks.Add(t);
                }

                return tasks;
            }

            // throw new NotImplementedException();
        }

        public Task GetById(string id)
        {
            throw new NotImplementedException();
        }
        public void Create(Task task)
        {
            throw new NotImplementedException();
        }
        public void Update(Task task)
        {
            throw new NotImplementedException();
        }
        public void Delete(long id)
        {
            throw new NotImplementedException();
        }
    }
}
