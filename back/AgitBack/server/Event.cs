using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using Newtonsoft.Json;

namespace AgitBack.AgitAsyncEvent
{

    public class AsyncEventManager
    {
        public delegate void ServeEventHandler(string message);
        private readonly Dictionary<string, ServeEventHandler> _eventHandlers = new();

        public AsyncEventManager()
        {

        }

        public void Init()
        {
            // Register Event
        }

        public void RegisterHandler(string message, ServeEventHandler handler)
        {
            if (_eventHandlers.ContainsKey(message))
            {
                _eventHandlers[message] += handler; // 기존 델리게이트에 추가
            }
            else
            {
                _eventHandlers[message] = handler; // 새로 등록
            }
        }

        public void HandleMessage(string eventKey, string message)
        {
            if (_eventHandlers.TryGetValue(eventKey, out var handler))
            {
                handler?.Invoke(message); // 델리게이트 호출
            }
            else
            {
                Console.WriteLine($"No handler registered for message: {message}");
            }
        }

        public void InitEventHandler()
        {
            // ServeEventHandler helloHandler = (msg) => Console.WriteLine($"Hello Handler: {msg}");
            // ServeEventHandler goodbyeHandler = (msg) => Console.WriteLine($"Goodbye Handler: {msg}");
            // RegisterHandler("hello", helloHandler);
            // RegisterHandler("goodbye", goodbyeHandler);
            RegisterHandler("LoginUnser", Event_LoginUser);
        }

        public void EventExecution(string eventKey, string message)
        {
            HandleMessage(eventKey, message);
        }

        // Server Events . . .
        public void Event_LoginUser(string msg)
        {

            
        }
    }

}