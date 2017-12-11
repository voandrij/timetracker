using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proxy.Data
{
    public class AccessTokenContext : DbContext
    {
        public AccessTokenContext(DbContextOptions<AccessTokenContext> options) : base(options)
        {
        }

        public DbSet<AccessToken> AccessTokens { get; set; } 
    }
}
