
using AgitBack.WebsocketHandler;

namespace AgitBack.Server
{
    
    public class AgitMainServer
    {
        private AgitWebSockketHandler websocketHandler = new AgitWebSockketHandler();

        public void Init()
        {
            // Initialize
            websocketHandler.Init();
        }

        public void Run()
        {
            // Websocket Async spin
            websocketHandler.Spin();
        }
    }

}