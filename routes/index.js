const {Router} = require("express")
const router = Router()

const auth = require("./auth")
const category = require("./category")
const product = require("./product")

router.get("/", (req, res) => {
	return res.status(200).json({
		status: true,
		message: "server running"
	})
})

router.use("/v1/auth", auth)
router.use("/v1/api/category", category)
router.use("/v1/api/product", product)

router.use("/", (req, res) => {
	return res.status(400).json({
		status: false,
		message: "endpoint not found"
	})
})

module.exports = router