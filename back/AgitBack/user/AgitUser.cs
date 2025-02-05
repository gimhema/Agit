


namespace AgitBack.AgitUser
{
    // 서버내에서 순회, 검색등을 하기위해 사용되는 식별자
    // 자동으로 생성됨
    public class AgitUserServerInfo
    {
        private int serverId {get; set;} // 서버내에서만 잔존됨

        private string uid {get; set;} // DB에 저장되는 고유 식별자
    }

    // 계정 정보
    public class AccountInfo
    {
        private string userID {get; set;}
        private string userChatName {get; set;}
        private string userPassword {get; set;}

        public AccountInfo(string _id, string _chatName, string _password)
        {
            this.userID = _id;
            this.userChatName = _chatName;
            this.userPassword = _password;
        }
    }

    public class UserProfile
    {
        private string userEmail {get; set;}

        private string userPhoneNumber {get; set;}

        private string userBio {get; set;}

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
        private AgitUserServerInfo userServerInfo {get; set;}
        private AccountInfo userAccountInfo {get; set;}
        private UserProfile userProfile {get; set;}

        public User(AgitUserServerInfo _newServerInfo, AccountInfo _newAccountInfo)
        {
            this.userServerInfo = _newServerInfo;
            this.userAccountInfo = _newAccountInfo;

            this.userProfile = new UserProfile();
        }


    }

}