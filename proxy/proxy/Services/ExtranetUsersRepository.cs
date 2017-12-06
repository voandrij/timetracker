using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proxy.Models;
using System.Xml;
using HtmlAgilityPack;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net;

namespace proxy.Services
{
    public class ExtranetUsersRepository : IUserRepository
    {

        const string DOMAIN = "https://extranet.newtonideas.com/";

        public async Task<string> Authenticate(string login, string password)
        {

            const string URI = DOMAIN + "Login.aspx";

            string authCookie;

            HttpClientHandler handler = new HttpClientHandler();
            using (var client = new HttpClient(handler))
            {

                var response1 = await client.GetAsync(URI);
                var response1Body = await response1.Content.ReadAsStringAsync();

                Dictionary<string, string> inputs = parseInputFields(response1Body);
                inputs["ctl03$ctl00$ctl03$login"] = login;
                inputs["ctl03$ctl00$ctl03$password"] = password;

                var formContent = new FormUrlEncodedContent(inputs);
                var response2 = await client.PostAsync(URI, formContent);

                CookieCollection cookies = handler.CookieContainer.GetCookies(new Uri(DOMAIN));

                if (cookies[".auth"] is null)
                    throw new UnauthorizedAccessException("Invalid login/password");

                authCookie = cookies[".auth"].Value;
            }

            return authCookie;

        }

        private Dictionary<string, string> parseInputFields(string html)
        {

            var htmlSnippet = new HtmlDocument();
            htmlSnippet.LoadHtml(html);

            Dictionary<string, string> inputs = new Dictionary<string, string>();

            foreach (HtmlNode input in htmlSnippet.DocumentNode.SelectNodes("//input"))
            {
                HtmlAttribute name = input.Attributes["name"];
                HtmlAttribute value = input.Attributes["value"];
                if (name != null)
                    inputs.Add(name.Value, value != null ? value.Value : "");
            }

            return inputs;
        }
        public void Create(User task)
        {
            throw new NotImplementedException();
        }

        public void Delete(long id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<User> GetAll()
        {
            throw new NotImplementedException();
        }

        public User GetById(long id)
        {
            throw new NotImplementedException();
        }

        public void Update(User task)
        {
            throw new NotImplementedException();
        }
    }
}
