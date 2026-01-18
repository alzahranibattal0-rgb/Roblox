const express = require("express");
const app = express();
const PORT = 3000;

const WEBHOOK_URL = "https://discordapp.com/api/webhooks/1462150846069608632/zt8PlqCfsdpTsgEwU_sR7BDCcPmPyLcn07avJxnSwB126V1F7JBfPXzzmul1mSGB3xYQ";

app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: "بيانات ناقصة" });
  }

  try {
    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Webhook",
        embeds: [
          {
            title: "تقديم جديد 🎮",
            color: 5814783,
            fields: [
              { name: "الاسم", value: name, inline: true },
              { name: "العمر", value: age, inline: true }
            ]
          }
        ]
      })
    });

    res.json({ success: true });
  } catch (e) {
    res.status(500).json({ error: "فشل الإرسال" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
