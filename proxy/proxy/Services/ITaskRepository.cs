using System;
using System.Collections.Generic;
using System.Linq;
using proxy.Models;

namespace proxy.Services
{
    interface ITaskRepository
    {
        List<Task> GetAll();
        Task GetById(long id);
        Task Create(Task task);
        Task Update(Task task);
        void Delete(long id);
    }
}
