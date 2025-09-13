// index.js
const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhập tên của bạn: ", (name) => {
  rl.question("Nhập năm sinh của bạn: ", (year) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year);

    console.log(`\nXin chào, tôi là ${name}, năm nay tôi ${age} tuổi.`);

    // 👉 Thêm đoạn code lưu thông tin vào file ở đây
    const user = { name, age };
    fs.writeFileSync("data.json", JSON.stringify(user, null, 2));
    console.log("Thông tin đã lưu vào data.json");

    rl.close();
  });
});
