const { Router } = require("express");
const messages = require("../db");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("partials/form");
});

messageRouter.post("/", (req, res) => {
  const message = req.body.text;
  const authorName = req.body.authorName;

  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect("/");
});

module.exports = messageRouter;
