using System;
using System.Collections.Generic;
using AgitBack.AgitUser;


namespace AgitBack.UserManager
{

    public class AgitUserManager
    {
        // Search Containers
        private Dictionary<string, User> userUIDSearchContainer = new Dictionary<string, User>();
        private Dictionary<string, User> userIdSearchContainer = new Dictionary<string, User>();
        private Dictionary<ulong, User> userServerIndexSearchContainer = new Dictionary<ulong, User>();
        private Dictionary<string, User> userUserNameSearchContainer = new Dictionary<string, User>();


        AgitUserManager()
        {

        }

        public void AddNewUser()
        {

        }

    }

}