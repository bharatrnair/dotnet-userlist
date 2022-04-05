using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web;
using Userlist.Models;
using userlist.Data;
using System.Data.Entity;
using System.Web.Http;


namespace Userlist.Controllers
{
    public class UserlistController : ApiController
    {
        private UserlistDbContext db = new UserlistDbContext();

        [HttpGet]
        public IEnumerable<Users> GetAll()
        {
            return db.Users;
        }
        public IHttpActionResult Get(int Id)
        {
            return Ok(db.Users.Find(Id));
        }

        [HttpPost]

        public IHttpActionResult Create(Users user)
        {
           db.Users.Add(user);
            db.SaveChanges();
            return Ok(user);
        }

        [HttpPut]

        public  IHttpActionResult Edit( Users user)
        {
            if (ModelState.IsValid);
            {
                db.Entry(user).State = EntityState.Modified;
                db.SaveChanges();
                return Ok(user);
            }
            return BadRequest("Bad Request");
        }

        [HttpDelete]

        public IHttpActionResult Delete(int Id)
        {
            db.Users.Remove(db.Users.Find(Id));
            db.SaveChanges();
            return Ok(Id);
        }





    }

}