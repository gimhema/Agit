
using AgitBack.WebsocketHandler;

namespace AgitBack.Server
{
    
    public class AgitMainServer
    {
        private AgitWebSockketHandler websocketHandler = new AgitWebSockketHandler();

        private void Init()
        {
            // Initialize
            websocketHandler.Init();
        }

        private void Run()
        {
            // Websocket Async spin
            websocketHandler.Spin();
        }

        public void Start()
        {
            Init();

            Run();
        }
    }

}