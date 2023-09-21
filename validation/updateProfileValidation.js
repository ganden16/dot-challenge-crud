const {body} = require("express-validator")

const updateProfileValidation = [
	body("name").notEmpty().withMessage("Name cannot be empty"),
	body("telephone").notEmpty().withMessage("telephone cannot be empty"),
	body("email").notEmpty().withMessage("Email cannot be empty").isEmail().withMessage("Invalid email format")
]

module.exports = updateProfileValidation
