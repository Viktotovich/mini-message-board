const { Router } = require("express");
const messages = require("../db");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("partials/form");
});

messageRouter.post("/", (req, res) => {
  const message = req.body.text;
  const authorName = req.body.authorName;
  msgID += 1;

  messages.push({
    text: message,
    user: authorName,
    added: new Date(),
    id: msgID,
  });
  res.redirect("/");
});

let msgID = 3;

module.exports = messageRouter;
