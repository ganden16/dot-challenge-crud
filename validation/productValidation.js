const {body} = require("express-validator")
const {getAllService} = require('../service/categoryService')

const validator = async (category_id) => {
	const categories = await getAllService()
	const ids = categories.map(item => item.id);
	const isExistCategory = ids.includes(parseInt(category_id))

	if(!isExistCategory) {
		return Promise.reject("Category_id not found")
	}
}
const productValidation = [
	body("name").notEmpty().withMessage("Name cannot be empty").isLength({min: 3}).withMessage("Name must be at least 3 characters long"),
	body("description").notEmpty().withMessage("description cannot be empty"),
	body("category_id").notEmpty().withMessage("Category_id cannot be empty").custom(validator),

]

module.exports = productValidation
