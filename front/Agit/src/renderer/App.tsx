import React, { useState } from "react";
import { Menu as MenuIcon, Send, AccountCircle, Settings } from "@mui/icons-material";
import { Button, TextField, List, ListItem, ListItemText, Divider, Paper, Typography, Avatar, Box, ListItemButton, Menu, MenuItem, IconButton } from "@mui/material";




const App = () => {

  const [sidebarWidth, setSiderbarWidth] = useState(250);
  const [isResizing, setIsResizing] = useState(false);
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if(!isResizing) return;
    const newWidth = Math.max(200, Math.min(e.clientX, 400));
    setSiderbarWidth(newWidth);
  };
  const handleMouseUp = () => {
    setIsResizing(false);
  }
  
  


  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

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
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "gray.100" }}>
      {/* 🔹 좌측 패널 (5:1 비율) */}
      <Box sx={{ flex: 1, backgroundColor: "#3F0E40", color: "white", p: 4, display: "flex", flexDirection: "column" }}>
        
        <Typography variant="h5" fontWeight="bold" display="flex" alignItems="center" gap={1} mb={3}>
          {/* 햄버거 버튼 */}
          <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
          My Slack
        </Typography>

        {/* 메뉴 리스트 */}
        <Menu anchorEl={menuAnchor} open={Boolean(menuAnchor)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>New Channel</MenuItem>
          <MenuItem onClick={handleMenuClose}>Invite People</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        </Menu>


        {/* 사용자 정보 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, p: 2, backgroundColor: "#4A154B", borderRadius: 2 }}>
          <Avatar sx={{ bgcolor: "gray" }}>
            <AccountCircle />
          </Avatar>
          <Box>
            <Typography variant="body2" fontWeight="bold">User Name</Typography>
            <Typography variant="caption" color="gray">@username</Typography>
          </Box>
        </Box>

        {/* 채널 목록 */}
        <Box sx={{ flex: 1, mt: 3, overflowY: "auto" }}>
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
                <Typography sx={{ fontSize: 18 }}>#</Typography>
                <ListItemText primary={channel} />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* 설정 아이콘 */}
        <Divider sx={{ borderColor: "#5E3B66" }} />
        <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="body2" color="gray">Settings</Typography>
          <Settings sx={{ fontSize: 18 }} />
        </Box>

      </Box>

      {/* 🔹 우측 채팅 영역 (5:1 비율) */}
      <Box sx={{ flex: 5, display: "flex", flexDirection: "column", backgroundColor: "white" }}>
        {/* 🔸 채팅 헤더 */}
        <Box sx={{ p: 3, borderBottom: "1px solid gray", display: "flex", alignItems: "center", backgroundColor: "white" }}>
          <Typography variant="h6">#{selectedChannel}</Typography>
        </Box>

        {/* 🔸 채팅 메시지 영역 */}
        <Box sx={{ flex: 1, p: 3, overflowY: "auto" }}>
          {messages.length === 0 ? (
            <Typography variant="body2" color="gray" textAlign="center">No messages yet</Typography>
          ) : (
            messages.map((msg, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={2} mb={3}>
                <Avatar sx={{ bgcolor: "gray" }}>{msg.user[0]}</Avatar>
                <Box>
                  <Typography variant="body2" fontWeight="bold">
                    {msg.user} <Typography variant="caption" color="gray" component="span">{msg.time}</Typography>
                  </Typography>
                  <Paper sx={{ padding: 2, borderRadius: 2 }}>
                    <Typography variant="body2">{msg.text}</Typography>
                  </Paper>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* 🔸 채팅 입력창 */}
        <Box sx={{ p: 3, borderTop: "1px solid gray", display: "flex", alignItems: "center", backgroundColor: "white" }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={`Message #${selectedChannel}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            sx={{ borderRadius: 50, marginRight: 2 }}
          />
          <Button variant="contained" color="primary" onClick={sendMessage} sx={{ borderRadius: 50 }}>
            <Send />
          </Button>
        </Box>
      </Box>

      
    </Box>
  );
};

export default App;
