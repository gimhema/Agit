


namespace AgitBack.AgitPacket
{
    public class PacketCreateUserAccount : PacketSuper
    {
        public string userAccountId { get; set; } = "";
        public string userAccountPassword { get; set; } = "";

        public string userAppName { get; set; } = "";

    }
    public class PacketLoginUser : PacketSuper
    {
        public string userAccountId { get; set; } = "";
        public string userAccountPassword { get; set; } = "";
    }
}