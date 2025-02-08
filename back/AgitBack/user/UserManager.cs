using System;
using System.Collections.Generic;
using AgitBack.AgitUser;


namespace AgitBack.UserManager
{

    public class AgitUserManager
    {
        public int userNum {get; set;}
        // Search Containers
        private List<User> userContainer = new List<User>();
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

        public void SignUpNewUser(AccountInfo _singupInfo)
        {

        }

        public void AddNewUser(User _newUser)
        {
            userContainer.Add(_newUser);
            
            userUIDSearchContainer.Add(_newUser.userServerInfo.uid, _newUser);
            userIdSearchContainer.Add(_newUser.userAccountInfo.userID, _newUser);
            userServerIndexSearchContainer.Add(_newUser.userServerInfo.serverId, _newUser);
            userUserNameSearchContainer.Add(_newUser.userAccountInfo.userChatName, _newUser);

            userNum = this.userContainer.Count();
        }

    }

}