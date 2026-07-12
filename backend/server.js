const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("========================================");
  console.log("🚀 StrideX Backend Started Successfully");
  console.log(`🌐 Server URL : http://localhost:${PORT}`);
  console.log("🌍 Environment: Development");
  console.log(`🕒 Started At : ${new Date().toLocaleString()}`);
  console.log("========================================");
});