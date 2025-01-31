const messageController = require("../controllers/messageController");
const { Router } = require("express");
const vmRouter = Router();

vmRouter.get("/:id", messageController);

module.exports = vmRouter;
