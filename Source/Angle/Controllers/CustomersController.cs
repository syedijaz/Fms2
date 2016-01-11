using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angle.Controllers
{
    public class CustomersController : Controller
    {
        // GET: Customers
        public ActionResult Customers()
        {
            return View();
        }

        // GET: Customers
        public ActionResult ViewCustomer()
        {
            return View();
        }
    }
}