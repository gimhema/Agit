using AgitBack.AgitPacket;



namespace AgitBack.AgitAsyncEvent
{
    public partial class AsyncEventManager
    {
        public void Event_CreateUser(string msg)
        {
            try
            {
                PacketCreateUserAccount deserializedPacket = PacketSuper.Deserialize<PacketCreateUserAccount>(msg);
            }
            catch (FormatException)
            {
                Console.WriteLine("Failed to deserialize JSON due to invalid format.");
            }
        }

        public void Event_LoginUser(string msg)
        {
            try
            {
                PacketLoginUser deserializedPacket = PacketSuper.Deserialize<PacketLoginUser>(msg);
            }
            catch (FormatException)
            {
                Console.WriteLine("Failed to deserialize JSON due to invalid format.");
            }
        }
    }


}