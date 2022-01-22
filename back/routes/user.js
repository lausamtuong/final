
const userController = require("../controllers/userController")
const router= require("express").Router()


router.put("/:id",userController.updateUser)

module.exports = router
