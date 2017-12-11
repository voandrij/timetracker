using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using proxy.Models;
using Newtonsoft.Json.Linq;

namespace proxy.Services {
    public class ExtranetTimelogsRepository : ITimelogRepository
    {
        public void Create(Timelog timelog)
        {
            throw new NotImplementedException();
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Timelog> GetAll() {
            using (var client = new HttpClient()) {
                List<Timelog> timelogs = new List<Timelog>();

                //Retrieving a JSON-Object
                var response = ExtranetUsersRepository.getResponseAsString("/api/ApiAlpha.ashx/w/TTI/a/TIMELOG/tickets/list?&listOfFields=ALL&withTechnicalData=true").Result;

                var json = JObject.Parse(response);
                var results = json["data"].Children().ToList();

                //Serialization
                foreach (JToken t in results) {
                    Timelog timelog = t.ToObject<Timelog>();
                    timelogs.Add(timelog);
                }

                return timelogs;
            }
        }

        public Timelog GetById(string id)
        {
            var allTimelogs = GetAll();
            foreach (Timelog t in allTimelogs) {
                if (t.Id == id) {
                    return t;
                }
            }
            return null;
        }

        public void Update(Timelog timelog)
        {
            throw new NotImplementedException();
        }
    }
}
