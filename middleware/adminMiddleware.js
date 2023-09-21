const adminMiddleware = (req, res, next) => {
	if(req.user.role != 'admin') {
		return res.status(403).json({
			errors: {
				name: "forbidden access",
				message: "resources can only be accessed by admin"
			}
		})
	}
	return next()
}

module.exports = adminMiddleware