const {Router} = require("express")
const router = Router()

const {productValidation, handleValidation} = require("../validation")
const {authMiddleware, adminMiddleware} = require('../middleware')
const {productController} = require('../controller')

router.get("/", authMiddleware, productController.getAll)
router.get("/:id", authMiddleware, productController.findOne)
router.post("/", productValidation, handleValidation, authMiddleware, adminMiddleware, productController.add)
router.put("/:id", productValidation, handleValidation, authMiddleware, adminMiddleware, productController.update)
router.delete("/:id", authMiddleware, adminMiddleware, productController.destroy)

module.exports = router