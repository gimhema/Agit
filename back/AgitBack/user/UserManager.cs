using System;
using System.Collections.Generic;
using AgitBack.AgitUser;


namespace AgitBack.UserManager
{

    public class AgitUserManager
    {
        public int userNum {get; set;}
        // Search Containers
        private Dictionary<string, User> userUIDSearchContainer = new Dictionary<string, User>();
        private Dictionary<string, User> userIdSearchContainer = new Dictionary<string, User>();
        private Dictionary<int, User> userServerIndexSearchContainer = new Dictionary<int, User>();
        private Dictionary<string, User> userUserNameSearchContainer = new Dictionary<string, User>();


        AgitUserManager()
        {
            userNum = 0;
        }

        public string MakeUID()
        {
            string _newUID = "";

            return _newUID;
        }

        public void SignUpNewUser()
        {

        }

        public void AddNewUser()
        {

            
            userNum = this.userIdSearchContainer.Count();
        }

    }

}