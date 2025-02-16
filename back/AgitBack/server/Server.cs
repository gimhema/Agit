
using AgitBack.WebsocketHandler;

namespace AgitBack.Server
{
    
    public class AgitMainServer
    {

        private void Init()
        {
            // Initialize
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
    }

}