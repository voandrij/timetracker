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
        public static Dictionary<string, string> authCookie;
        public static Dictionary<string, string> AuthCookie
        {
            get { return authCookie; }
            private set { authCookie = value; }
        }

        public static void AddAuthorizationInfo(ref string cookie)
        {
            cookie.Trim();
            cookie += "; ASP.NET_SessionId=" + AuthCookie["ASP.NET_SessionId"] + "; .auth=" + AuthCookie[".auth"];
        }

        public static async System.Threading.Tasks.Task<string> getResponseAsString(string requestUri) {
            using (var client = new HttpClient())
            {
                //var cookieId = ExtranetUsersRepository.AuthCookie;
                //System.Diagnostics.Debug.WriteLine("\n\nSession ID: \t" + cookieId["ASP.NET_SessionId"] + "\nAuthorization Token: \t" + cookieId[".auth"] + "\n\n");

                client.BaseAddress = new Uri("https://extranet.newtonideas.com");
                client.DefaultRequestHeaders.Accept.Clear();

                //Setting Cookie
                string cookie = "XCMWSERV = default; require_ssl=true; language_code=en-US;";
                ExtranetUsersRepository.AddAuthorizationInfo(ref cookie);
                client.DefaultRequestHeaders.Add("Cookie", cookie);
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                //Getting Response
                var response = await client.GetAsync(requestUri);
                response.EnsureSuccessStatusCode();
                var stringResult = await response.Content.ReadAsStringAsync();
                return stringResult;
            }
        }

        public async Task<Dictionary<string, string>> Authenticate(string login, string password)
        {

            const string URI = DOMAIN + "Login.aspx";

            AuthCookie = new Dictionary<string, string>();

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

                AuthCookie.Add("ASP.NET_SessionId", cookies["ASP.NET_SessionId"].Value);
                AuthCookie.Add(".auth", cookies[".auth"].Value);
            }

            return AuthCookie;

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
