using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using proxy.Services;
using Microsoft.EntityFrameworkCore;
using proxy.Data;

namespace proxy
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddTransient<IProjectRepository, ExtranetProjectsRepository>();
            services.AddTransient<ITaskRepository, ExtranetTasksRepository>();
            services.AddTransient<ITimelogRepository, ExtranetTimelogsRepository>();
            services.AddTransient<IUserRepository, ExtranetUsersRepository>();

            services.AddDbContext<AccessTokenContext>(options =>
                    options.UseSqlite("DataSource=E:/year4/trym1/Newtonideas/timetracker/proxy/AccessTokensDB.db"));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
