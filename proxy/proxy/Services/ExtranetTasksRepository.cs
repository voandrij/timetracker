using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;

namespace proxy.Services
{
    public class ExtranetTasksRepository : ITaskRepository
    {
        public IEnumerable<Task> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task GetById(long id)
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