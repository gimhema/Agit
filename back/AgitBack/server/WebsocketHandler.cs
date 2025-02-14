using System;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AgitBack.AgitAsyncEvent;

namespace AgitBack.WebsocketHandler 
{
    public class AgitWebSockketHandler
    {
        private AsyncEventManager eventManager = new AsyncEventManager();
        private HttpListener httpListener;

        public void Init()
        {
            // Event Manager create . . .
            eventManager.Init();

            // Websocket create . . .
            httpListener = new HttpListener();
            httpListener.Prefixes.Add("http://localhost:8080/ws/"); // 웹소켓 엔드포인트 설정
            httpListener.Start();
            
            Console.WriteLine("WebSocket 서버가 시작되었습니다.");

            _ = AcceptWebSocketClients(); // 클라이언트 수락 비동기 처리
        }

        private async Task AcceptWebSocketClients()
        {
            while (true)
            {
                try
                {
                    HttpListenerContext context = await httpListener.GetContextAsync();

                    if (context.Request.IsWebSocketRequest)
                    {
                        HttpListenerWebSocketContext webSocketContext = 
                            await context.AcceptWebSocketAsync(subProtocol: null);
                        Console.WriteLine("클라이언트가 연결되었습니다.");

                        _ = HandleWebSocketConnection(webSocketContext.WebSocket);
                    }
                    else
                    {
                        context.Response.StatusCode = 400; // Bad Request
                        context.Response.Close();
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"[Error] WebSocket 연결 오류: {ex.Message}");
                }
            }
        }

        private async Task HandleWebSocketConnection(WebSocket webSocket)
        {
            byte[] buffer = new byte[1024];

            try
            {
                while (webSocket.State == WebSocketState.Open)
                {
                    WebSocketReceiveResult result = 
                        await webSocket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);

                    if (result.MessageType == WebSocketMessageType.Close)
                    {
                        await webSocket.CloseAsync(WebSocketCloseStatus.NormalClosure, "Closing", CancellationToken.None);
                        Console.WriteLine("클라이언트 연결이 종료되었습니다.");
                        break;
                    }

                    string message = Encoding.UTF8.GetString(buffer, 0, result.Count);
                    Console.WriteLine($"받은 메시지: {message}");

                    // 에코 메시지 전송
                    byte[] responseBuffer = Encoding.UTF8.GetBytes($"Echo: {message}");
                    await webSocket.SendAsync(new ArraySegment<byte>(responseBuffer), WebSocketMessageType.Text, true, CancellationToken.None);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"[Error] WebSocket 처리 중 오류 발생: {ex.Message}");
            }
            finally
            {
                webSocket.Dispose();
            }
        }

        public void Spin()
        {
            // 추후 추가 가능
        }
    }
}
