using System;
using System.Collections.Generic;
using AgitBack.AgitUser;


namespace AgitBack.UserManager
{

    public class AgitUserManager
    {
        const int UID_LENGTH = 30;
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
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            Random random = new Random();
            char[] stringChars = new char[UID_LENGTH];

            for (int i = 0; i < UID_LENGTH; i++) {
                // chars에서 랜덤한 문자 선택
                stringChars[i] = chars[random.Next(chars.Length)];
            }

            // 문자 배열을 문자열로 변환
            return new string(stringChars);
        }

        public bool IsExistUID(string _uid)
        {
            // 나중에는 DB에서 체크해야함

            // DB 연동전이라서 서버에서 UID 중복검사 진행함
            return this.userUIDSearchContainer.ContainsKey(_uid);
        }

        public void SignUpNewUser(AccountInfo _singupInfo)
        {
            // Make UID
            string _newUID = "";
            while(true) {
                _newUID = MakeUID();
                if(false == IsExistUID(_newUID)) {
                    break;
                }
            }
            AgitUserServerInfo _userServerInfo = new AgitUserServerInfo();
            _userServerInfo.serverId = -1; // 접속전이기 때문에
            _userServerInfo.uid = _newUID;

            User _newUser = new User(_userServerInfo, _singupInfo);

            // CreateNewUser(_newUser); DB 연동후에는 DB에 저장함
            EnterNewUser(_newUser); // DB 연동전이기 때문에 등록과 동시에 로그인(나중에 분리해야함)
        }

        public void CreateNewUser(User _newUser)
        {
            // DB에 저장            
        }

        public void EnterNewUser(User _newUser)
        {
            this.userContainer.Add(_newUser);
            
            this.userUIDSearchContainer.Add(_newUser.userServerInfo.uid, _newUser);
            this.userIdSearchContainer.Add(_newUser.userAccountInfo.userID, _newUser);

            this.userUserNameSearchContainer.Add(_newUser.userAccountInfo.userChatName, _newUser);

            this.userServerIndexSearchContainer.Add(userNum, _newUser);
            _newUser.userServerInfo.serverId = userNum;

            this.userNum = this.userContainer.Count();
        }

    }

}