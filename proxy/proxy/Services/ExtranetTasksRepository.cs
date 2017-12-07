using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using static proxy.Models.ExtranetTasksList;
using Newtonsoft.Json;

namespace proxy.Services
{
    public class ExtranetTasksRepository : ITaskRepository {
        public async System.Threading.Tasks.Task<IEnumerable<Task>> GetAll() {
            //  HttpClientHandler handler = new HttpClientHandler();
            using (var client = new HttpClient()) {
                List<Task> tasks = new List<Task>();

                var cookieId = ExtranetUsersRepository.AuthCookie;
                //System.Diagnostics.Debug.WriteLine("\n\nSession ID: \t" + cookieId["ASP.NET_SessionId"] + "\nAuthorization Token: \t" + cookieId[".auth"] + "\n\n");

                client.BaseAddress = new Uri("https://extranet.newtonideas.com");
                client.DefaultRequestHeaders.Accept.Clear();

                //Setting Cookie
                client.DefaultRequestHeaders.Add("Cookie", "XCMWSERV = default; ASP.NET_SessionId=" + cookieId["ASP.NET_SessionId"] + "; require_ssl=true; language_code=en-US; .auth=" + cookieId[".auth"]);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                //Link to OUR Project
                var response = await client.GetAsync("/api/ApiAlpha.ashx/w/TTI/a/TASK/tickets/list?&listOfFields=ALL&withTechnicalData=true");

                //Getting Response
                response.EnsureSuccessStatusCode();
                var stringResult = await response.Content.ReadAsStringAsync();

                //Serialization
                var extranetTasksList = JsonConvert.DeserializeObject<RootObject>(stringResult);
                for (int i = 0; i < extranetTasksList.data.Count; ++i) {
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
        }

        public Task GetById(long id) {
            throw new NotImplementedException();
        }
        public void Create(Task task) {
            throw new NotImplementedException();
        }
        public void Update(Task task) {
            throw new NotImplementedException();
        }
        public void Delete(long id) {
            throw new NotImplementedException();
        }
    }
    
}