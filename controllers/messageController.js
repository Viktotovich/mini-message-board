const db = require("../db/queries");

const getMessageById = async function (req, res) {
  const messageId = req.params.id;
  const message = await db.findMessage(messageId);

  if (!message) {
    throw new Error("Can't find the message, perhaps it was deleted?");
  }

  res.render("partials/message", { message: message, visibility: "hidden" });
};

module.exports = getMessageById;
