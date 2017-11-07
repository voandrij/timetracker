using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services
{
    interface ITimelogRepository
    {
        List<Timelog> GetAll();
        Timelog GetById(long id);
        Timelog Create(Timelog timelog);
        Timelog Update(Timelog timelog);
        void Delete(long id);
    }
}
