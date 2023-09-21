const {Router} = require("express")
const router = Router()

const {categoryValidation, handleValidation} = require("../validation")
const {authMiddleware, adminMiddleware} = require('../middleware')
const {categoryController} = require('../controller')

router.get("/", authMiddleware, categoryController.getAll)
router.get("/:id", authMiddleware, categoryController.findOne)
router.post("/", categoryValidation, handleValidation, authMiddleware, adminMiddleware, categoryController.add)
router.put("/:id", categoryValidation, handleValidation, authMiddleware, adminMiddleware, categoryController.update)
router.delete("/:id", authMiddleware, adminMiddleware, categoryController.destroy)

module.exports = router