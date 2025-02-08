const { Router } = require("express");
const { insertMessage } = require("../db/queries");
const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("partials/form");
});

messageRouter.post("/", async (req, res) => {
  const message = req.body.text;
  const authorName = req.body.authorName;

  await insertMessage({
    text: message,
    user: authorName,
  });
  res.redirect("/");
});

module.exports = messageRouter;
