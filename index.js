// index.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Nhập tên của bạn: ", (name) => {
  rl.question("Nhập tuổi của bạn: ", (age) => {
    console.log(`\nXin chào, tôi là ${name}, năm nay tôi ${age} tuổi.`);
    rl.close();
  });
});
