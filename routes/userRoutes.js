const express = require("express");
const router = express.Router();
const { getUsers, createUsers } = require("../controllers/userController");

router.get("/", getUsers);
router.post("/", createUsers);

module.exports = router;
