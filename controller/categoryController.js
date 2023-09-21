const {
	getAllService,
	findOneService,
	addService,
	updateService,
	destroyService
} = require('../service/categoryService')

const getAll = async (req, res) => {
	try {
		const categories = await getAllService()
		if(categories.length > 0) {
			return res.status(200).json({
				status: true,
				message: 'list all data categories',
				data: categories
			})
		} else {
			return res.status(400).json({
				status: false,
				message: 'data categories empty',
				data: {}
			})
		}
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: 'internal server error',
		})
	}
}

const findOne = async (req, res) => {
	try {
		const category = await findOneService(req.params.id)
		return res.status(200).json({
			status: true,
			message: 'data category',
			data: category
		})
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: 'internal server error',
		})
	}
}

const add = async (req, res) => {
	try {
		const newCategory = await addService(req.body)
		if(newCategory) {
			return res.status(200).json({
				status: true,
				message: 'new category created successfuly',
				data: newCategory
			})
		}
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: 'internal server error',
		})
	}
}

const update = async (req, res) => {
	try {
		const updatedCategory = await updateService(req.params.id, req.body)
		if(updatedCategory) {
			return res.status(200).json({
				status: true,
				message: 'new category updated successfuly',
				data: updatedCategory
			})
		}
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: 'internal server error',
		})
	}
}

const destroy = async (req, res) => {
	try {
		const isSuccess = await destroyService(req.params.id)
		if(isSuccess) {
			return res.status(200).json({
				status: true,
				message: 'category deleted successfuly, id = ' + req.params.id,
			})
		}
	} catch(error) {
		return res.status(500).json({
			status: false,
			message: 'internal server error',
		})
	}
}

module.exports = {getAll, findOne, add, update, destroy}