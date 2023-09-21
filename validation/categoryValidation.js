const {body} = require("express-validator")


const categoryValidation = [
	body("name").notEmpty().withMessage("Name cannot be empty").isLength({min: 3}).withMessage("Name must be at least 3 characters long"),
]

module.exports = categoryValidation
