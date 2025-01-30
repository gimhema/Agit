import React, { useState } from "react";
import { Menu, Send, AccountCircle, Settings } from "@mui/icons-material";
import { Button, TextField, List, ListItem, ListItemText, Divider, Paper, Typography, Avatar, Box, ListItemButton } from "@mui/material";

const App = () => {
  const [channels] = useState(["general", "random", "development"]);
  const [selectedChannel, setSelectedChannel] = useState("general");
  const [messages, setMessages] = useState<{ user: string; text: string; time: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages([...messages, { user: "You", text: input, time }]);
    setInput("");
  };

  return (
    <Box className="flex h-screen bg-gray-100">
      {/* 🔹 사이드바 */}
      <Box className="w-72 bg-[#3F0E40] text-white p-4 flex flex-col">
        <Typography variant="h5" fontWeight="bold" display="flex" alignItems="center" gap={1} mb={3}>
          <Menu /> My Slack
        </Typography>

        {/* 사용자 정보 */}
        <Box className="flex items-center gap-3 p-2 bg-[#4A154B] rounded-lg">
          <Avatar sx={{ bgcolor: "gray" }}>
            <AccountCircle />
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight="bold">User Name</Typography>
            <Typography variant="caption" color="gray">@username</Typography>
          </Box>
        </Box>

        {/* 채널 목록 */}
        <Box className="flex-1 mt-4">
          <Typography variant="body2" color="gray" mb={2}>Channels</Typography>
          <List>
            {channels.map((channel) => (
              <ListItemButton
                key={channel}
                onClick={() => setSelectedChannel(channel)}
                sx={{
                  backgroundColor: selectedChannel === channel ? "#522653" : "transparent",
                  "&:hover": { backgroundColor: "#4A154B" },
                  borderRadius: 1,
                }}
              >
                {/* 텍스트로 `#` 기호 추가 */}
                <Typography sx={{ fontSize: 18 }}>#</Typography>
                <ListItemText primary={channel} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* 설정 아이콘 */}
        <Divider sx={{ borderColor: "#5E3B66" }} />
        <Box className="p-3 flex justify-between items-center">
          <Typography variant="body2" color="gray">Settings</Typography>
          <Settings sx={{ fontSize: 18 }} />
        </Box>
      </Box>

      {/* 🔹 메인 채팅 영역 */}
      <Box className="flex flex-col flex-1">
        {/* 🔸 채팅 헤더 */}
        <Box className="bg-white p-4 border-b flex items-center shadow-md">
          <Typography variant="h6">#{selectedChannel}</Typography>
        </Box>

        {/* 🔸 채팅 메시지 영역 */}
        <Box className="flex-1 p-4 overflow-auto" sx={{ paddingBottom: 50 }}>
          {messages.length === 0 ? (
            <Typography variant="body2" color="gray" textAlign="center">No messages yet</Typography>
          ) : (
            messages.map((msg, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={2} mb={4}>
                {/* 프로필 이미지 */}
                <Avatar sx={{ bgcolor: "gray" }}>{msg.user[0]}</Avatar>
                {/* 메시지 박스 */}
                <Box>
                  <Typography variant="body2" fontWeight="bold">
                    {msg.user} <Typography variant="caption" color="gray" component="span">{msg.time}</Typography>
                  </Typography>
                  <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 1 }}>
                    <Typography variant="body2">{msg.text}</Typography>
                  </Paper>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* 🔸 채팅 입력창 */}
        <Box className="p-4 bg-white border-t flex items-center shadow-md">
          <TextField
            fullWidth
            variant="outlined"
            placeholder={`Message #${selectedChannel}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            sx={{
              borderRadius: 50,
              marginRight: 2,
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={sendMessage}
            sx={{
              borderRadius: 50,
              paddingLeft: 3,
              paddingRight: 3,
            }}
          >
            <Send sx={{ fontSize: 18 }} />
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
