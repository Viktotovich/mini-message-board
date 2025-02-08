const pool = require("./pool");
require("dotenv").config();

async function getAllMessages() {
  try {
    const { rows } = await pool.query("SELECT * FROM message_board");
    return rows;
  } catch (err) {
    console.error(err);
  }
}

async function insertMessage(message) {
  console.dir(message);
  try {
    await pool.query(
      "INSERT INTO message_board (text, username) VALUES ($1, $2)",
      [message.text, message.user]
    );
    return;
  } catch (err) {
    console.error(err);
  }
}

async function findMessage(id) {
  try {
    const foundResults = await pool.query(
      "SELECT * FROM message_board WHERE id = $1",
      [id]
    );
    return foundResults.rows;
  } catch (err) {
    console.error(err);
  }
}

async function deleteMessage(id) {
  try {
    await pool.query("DELETE FROM message_board WHERE id = $1", [id]);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getAllMessages,
  insertMessage,
  findMessage,
  deleteMessage,
};
