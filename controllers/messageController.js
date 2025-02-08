const db = require("../db/queries");

const getMessageById = async function (req, res) {
  const messageId = req.params.id;
  const messageArr = await db.findMessage(messageId);
  const message = messageArr[0];

  if (!message) {
    throw new Error("Can't find the message, perhaps it was deleted?");
  }

  res.render("partials/message", { message: message, visibility: "hidden" });
};

module.exports = getMessageById;
