// index.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Nhập tên của bạn: ", (name) => {
  rl.question("Nhập năm sinh của bạn: ", (year) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year);

    console.log("\n==============================");
    console.log(`Xin chào ${name}!`);
    console.log(`Bạn sinh năm ${year}, năm nay bạn ${age} tuổi.`);
    console.log("==============================\n");

    rl.close();
  });
});
