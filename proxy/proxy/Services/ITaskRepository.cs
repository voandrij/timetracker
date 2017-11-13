using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;

namespace proxy.Services
{
    public interface ITaskRepository
    {
        IEnumerable<Task> GetAll();
        Task GetById(long id);
        void Create(Task task);
        void Update(Task task);
        void Delete(long id);
    }
}
