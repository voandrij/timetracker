using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    interface IProjectRepository
    {
        List<Project> GetAll();
        Project GetById(long id);
        Project Create(Project project);
        Project Update(Project project);
        void Delete(long id);
    }
}
