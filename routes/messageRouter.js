const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("partials/form");
});

module.exports = messageRouter;
