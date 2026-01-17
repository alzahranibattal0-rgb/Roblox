const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

const ACCOUNT_SID = "PUT_SID";
const AUTH_TOKEN  = "PUT_TOKEN";
const TWILIO_NUM  = "+1XXXXXXXXXX";     // رقم Twilio
const OWNER_NUM   = "+9665XXXXXXXX";    // رقمك

const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

app.post("/apply", (req, res) => {
  const msg = `لاعب جديد 🎮\nالاسم: ${req.body.player}`;

  client.messages.create({
    body: msg,
    from: TWILIO_NUM,
    to: OWNER_NUM
  });

  res.send("تم الإرسال بنجاح ✅");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
