const express = require("express");
const app = express();
const line = require("@line/bot-sdk");
const config = require("./config");

const client = new line.Client({
  channelAccessToken: config.accessToken,
  channelSecret: config.secret,
});

const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map((text) => text)
  );
};

const handlerEvent = async (event) => {
  switch (event.type) {
    case "follow":
      console.log(event.source.userId);
      return await client.linkRichMenuToUser(
        event.source.userId,
        config.richMenu
      );
      break;
    case "unfollow":
      console.log("UNFOLLOW");
      return await client.unlinkRichMenuFromUser(event.source.userId);
    default:
      break;
  }
};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/webhook", (req, res) => {
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  Promise.all(
    req.body.events.map((event) => {
      console.log("event ==> ", event);
      // check verify webhook event
      if (
        event.replyToken === "00000000000000000000000000000000" ||
        event.replyToken === "ffffffffffffffffffffffffffffffff"
      ) {
        return;
      }
      return handlerEvent(event);
    })
  )
    .then(() => res.status(200).send({ status_api: "success" }))
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = app.listen(
  config.port,
  console.log(`LISTEN ON PORT ${config.port}`)
);
