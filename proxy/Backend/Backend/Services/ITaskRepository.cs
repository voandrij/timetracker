using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
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
