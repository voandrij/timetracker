using proxy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proxy.Services
{
    interface IUserRepository
    {
        List<User> GetAll();
        User GetById(long id);
        User Create(User user);
        User Update(User user);
        void Delete(long id);
    }
}
