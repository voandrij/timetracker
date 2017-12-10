using proxy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proxy.Services
{
    public interface ITimelogRepository
    {
        IEnumerable<Timelog> GetAll();
        Timelog GetById(string id);
        void Create(Timelog timelog);
        void Update(Timelog timelog);
        void Delete(string id);
    }
}
