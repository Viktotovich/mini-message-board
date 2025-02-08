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
  try {
    await pool.query("INSERT INTO message_board VALUES ($1)", [message]);
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
