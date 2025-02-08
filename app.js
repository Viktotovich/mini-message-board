require("dotenv").config();
const express = require("express");
const path = require("node:path");
const { getAllMessages } = require("./db/queries");
const messageRouter = require("./routes/messageRouter");
const vmRouter = require("./routes/viewMessageRouter");

const app = express();
const PORT = process.env.PORT;
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const messages = await getAllMessages();
  res.render("pages/index", { messages: messages });
});

app.use("/new", messageRouter);
app.use("/message", vmRouter);

app.get("/throw", (req, res) => {
  throw new Error("Intentional Failure");
});

app.listen(PORT, () => {
  console.dir(`We are now live on PORT: ${PORT}`);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).send(`<h2>Unexpected Error: ${err.message}</h2>`);
});
