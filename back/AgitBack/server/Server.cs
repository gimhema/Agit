using AgitBack.WebsocketHandler;
using AgitBack.AgitDB;


namespace AgitBack.Server
{
    public class AgitMainServer
    {

        private void Init()
        {
            // Initialize
            DBConnector.Instance.Start();
            AgitWebSockketHandler.Instance.Init();
        }

        private void Run()
        {
            // Websocket Async spin
            AgitWebSockketHandler.Instance.Spin();
        }

        public void Start()
        {
            Init();

            Run();
        }

        public void StopServer()
        {
            // 서버 종료 시 DB 연결 종료
            DBConnector.Instance.ExitDB();
        }
    }

}