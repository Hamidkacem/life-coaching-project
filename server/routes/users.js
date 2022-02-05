const router = require("express").Router();
const {User}= require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds=10 /// i foundet in the internet 
/// creating an account////
router.post("/", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res.send("User with given email already Exist!");
		const salt = await bcrypt.genSalt(saltRounds);
		const hashPassword = await bcrypt.hash(req.body.password, salt);
		await new User({  ///// i tried to put it in a variable the return it but it didint work so i just save after the new User directly 
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: hashPassword }).save();
		res.send( "User created successfully",) //newuser );
	} catch (error) {
		res.send({ message: "Internal Server Error" });
	}
});

module.exports = router;
