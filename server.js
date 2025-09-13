const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: parse JSON body (sau này cần API thì dùng)
app.use(express.json());

// Phục vụ file tĩnh trong thư mục public
app.use(express.static(path.join(__dirname, "public")));

// Ví dụ API demo (test ở http://localhost:3000/api/hello)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Xin chào từ API 🚀" });
});

// Fallback: tất cả route không khớp sẽ trả về index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



// Start server
app.listen(PORT, () => {
  console.log(`✅ Server chạy tại: http://localhost:${PORT}`);
});
