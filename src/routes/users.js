const express = require('express')
const userController = require('../controller/users.js')
const router = express.Router()

router.get("/", userController.getAllUsers)
router.patch("/:id", userController.updateUser)
router.post("/", userController.createNewUsers)
router.delete("/:id", userController.deleteUser)

module.exports = router;