using System;
using Microsoft.Data.Sqlite;

namespace AgitBack.AgitDB
{
    public class DBConnector
    {
        private static DBConnector _instance;
        private static readonly object _lock = new object();
        private SqliteConnection connection;

        private bool isConnected = false;

        private DBConnector()
        {

        }

        public static DBConnector Instance 
        {
            get
            {
                if (_instance == null)
                {
                    lock (_lock)
                    {
                        if (_instance == null)
                        {
                            _instance = new DBConnector();
                        }
                    }
                }
                return _instance;
            }
        }

        public void Start()
        {
            if (isConnected) return;

            string connectionString = "Data Source=AgitDB.db";

            try
            {
                // SQLite 데이터베이스 연결
                this.connection = new SqliteConnection(connectionString);
                this.connection.Open();
                isConnected = true; // 연결이 되면 상태 업데이트
                Console.WriteLine("DB 연결 성공");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"DB 연결 실패: {ex.Message}");
            }
        }

        // DB 연결을 종료
        public void ExitDB() 
        {
            if (isConnected)
            {
                this.connection.Close();
                isConnected = false;
                Console.WriteLine("DB 연결 종료");
            }
            else
            {
                Console.WriteLine("DB 연결이 되어 있지 않습니다.");
            }
        }

        // DB 연결 상태가 유효한지 확인
        public bool IsConnectionValid()
        {
            // 연결이 되어 있으면 상태를 확인
            if (isConnected)
            {
                try
                {
                    // 간단히 연결을 테스트하기 위한 쿼리 실행
                    using (var command = new SqliteCommand("SELECT 1", this.connection))
                    {
                        command.ExecuteScalar(); // 쿼리 실행
                        return true; // 연결이 유효함
                    }
                }
                catch (Exception)
                {
                    return false; // 연결이 유효하지 않음
                }
            }
            return false; // 연결이 되어 있지 않음
        }
    }
}
