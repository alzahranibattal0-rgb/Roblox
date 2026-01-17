const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.urlencoded({ extended: true }));

const DISCORD_WEBHOOK = "https://discordapp.com/api/webhooks/1462150846069608632/zt8PlqCfsdpTsgEwU_sR7BDCcPmPyLcn07avJxnSwB126V1F7JBfPXzzmul1mSGB3xYQ";

app.get("/", (req, res) => {
  res.send(`
  <html>
  <body style="background:#000;color:#fff;text-align:center;font-family:Arial">
    <h2>تقديم لاعب</h2>
    <form method="POST" action="/apply">
      <input type="text" name="playerName" placeholder="اسم اللاعب" required><br><br>
      <input type="number" name="playerAge" placeholder="العمر" required><br><br>
      <button type="submit">إرسال</button>
    </form>
  </body>
  </html>
  `);
});

app.post("/apply", (req, res) => {
  const name = req.body.playerName;
  const age = req.body.playerAge;

  fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "Webhook",
      content: `📩 تقديم جديد\n👤 الاسم: ${name}\n🎂 العمر: ${age}`
    })
  });

  res.send("تم الإرسال بنجاح ✅");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
