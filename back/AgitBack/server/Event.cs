using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;


namespace AgitBack.AgitAsyncEvent
{

    public partial class AsyncEventManager
    {
        private static AsyncEventManager _instance;
        private static readonly object _lock = new object();
        public delegate void ServeEventHandler(string message);
        private readonly Dictionary<string, ServeEventHandler> _eventHandlers = new();

        private AsyncEventManager()
        {

        }

        public static AsyncEventManager Instance 
        {
            get
            {
                if (_instance == null)
                {
                    lock (_lock)
                    {
                        if (_instance == null)
                        {
                            _instance = new AsyncEventManager();
                        }
                    }
                }
                return _instance;
            }
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
            RegisterHandler("CreateUser", Event_CreateUser);
            RegisterHandler("LoginUser", Event_LoginUser);            
        }

        public void EventExecution(string eventKey, string message)
        {
            HandleMessage(eventKey, message);
        }

    }

}