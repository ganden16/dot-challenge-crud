const {Router} = require("express")
const router = Router()

const {loginValidation, registerValidation, updateProfileValidation, handleValidation} = require("../validation")
const {authMiddleware} = require('../middleware')
const {authController} = require('../controller')

router.post("/register", registerValidation, handleValidation, authController.register)
router.post("/login", loginValidation, handleValidation, authController.login)
router.put("/user", updateProfileValidation, handleValidation, authMiddleware, authController.updateUser)
router.get("/me", authMiddleware, authController.me)

module.exports = router