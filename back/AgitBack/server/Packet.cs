using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AgitBack.AgitPacket
{
     public abstract class PacketSuper
    {
        public string Serialize()
        {
            try
            {
                return JsonConvert.SerializeObject(this, Formatting.None);
            }
            catch (JsonException ex)
            {
                Console.WriteLine($"Serialization Error: {ex.Message}");
                return string.Empty; // 실패 시 빈 문자열 반환
            }
        }

        // JSON 문자열을 받아 패킷 객체로 변환 (역직렬화)
        public static T Deserialize<T>(string json) where T : PacketSuper
        {
            if (string.IsNullOrWhiteSpace(json))
            {
                throw new ArgumentException("Invalid JSON: Input is null or empty.");
            }

            try
            {
                // JSON 형식 검증
                var parsedJson = JObject.Parse(json);
                return JsonConvert.DeserializeObject<T>(json) ?? throw new InvalidOperationException("Deserialization resulted in null.");

            }
            catch (JsonReaderException ex)
            {
                Console.WriteLine($"Deserialization Error: {ex.Message}");
                throw new FormatException("Invalid JSON format.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Unexpected Error: {ex.Message}");
                throw;
            }
        }
    }
}