const {
	getAllService,
	findOneService,
	addService,
	updateService,
	destroyService
} = require('../service/productService')

const getAll = async (req, res) => {
	try {
		const products = await getAllService()
		if(products.length > 0) {
			return res.status(200).json({
				status: true,
				message: 'list all data products',
				data: products
			})
		} else {
			return res.status(400).json({
				status: false,
				message: 'data products empty',
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
		const product = await findOneService(req.params.id)
		return res.status(200).json({
			status: true,
			message: 'data product',
			data: product
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
		const newProduct = await addService(req.body)
		if(newProduct) {
			return res.status(200).json({
				status: true,
				message: 'new product created successfuly',
				data: newProduct
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
		const updatedProduct = await updateService(req.params.id, req.body)
		if(updatedProduct) {
			return res.status(200).json({
				status: true,
				message: 'new product updated successfuly',
				data: updatedProduct
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
				message: 'product deleted successfuly id = ' + req.params.id,
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
