const db = require("../db");

const getMessageById = function (req, res) {
  const messageId = req.params.id;

  const message = getMessage(messageId);

  if (!message) {
    throw new Error("Can't find the message, perhaps it was deleted?");
  }

  res.render("partials/message", { message: message });
};

function getMessage(id) {
  let foundMsg = db.filter((message) => {
    return message.id == id;
  });
  return foundMsg[0];
}

module.exports = getMessageById;
