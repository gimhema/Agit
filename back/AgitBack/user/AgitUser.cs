


namespace AgitBack.AgitUser
{
    // 서버내에서 순회, 검색등을 하기위해 사용되는 식별자
    // 자동으로 생성됨
    public class AgitUserServerInfo
    {
        public int serverId {get; set;} // 서버내에서만 잔존됨

        public string uid {get; set;} // DB에 저장되는 고유 식별자
    }

    // 계정 정보
    public class AccountInfo
    {
        public string userID {get; set;}
        public string userChatName {get; set;}
        public string userPassword {get; set;}

        public AccountInfo(string _id, string _chatName, string _password)
        {
            this.userID = _id;
            this.userChatName = _chatName;
            this.userPassword = _password;
        }
    }

    public class UserProfile
    {
        public string userEmail {get; set;}

        public string userPhoneNumber {get; set;}

        public string userBio {get; set;}

        public UserProfile()
        {
            this.userEmail = "";
            this.userPhoneNumber = "";
            this.userBio = "";            
        }

        public UserProfile(string _email, string _phoneneNumber, string _bio)
        {
            this.userEmail = _email;
            this.userPhoneNumber = _phoneneNumber;
            this.userBio = _bio;
        }
    }

    public class User
    {
        public AgitUserServerInfo userServerInfo {get; set;}
        public AccountInfo userAccountInfo {get; set;}
        public UserProfile userProfile {get; set;}

        public User(AgitUserServerInfo _newServerInfo, AccountInfo _newAccountInfo)
        {
            this.userServerInfo = _newServerInfo;
            this.userAccountInfo = _newAccountInfo;

            this.userProfile = new UserProfile();
        }


    }

}