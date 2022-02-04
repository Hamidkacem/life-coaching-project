const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
///// cheking the user and loging in//// 
router.post("/", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.send( "Invalid Email or Password" );

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword)
			return res.send("Invalid Password");
		res.send("logged in successfully" );
	} catch (error) {
		res.send( "Internal Server Error" );
	}
});

router.get("/",async (req, res) => {
	try{
		const findall = await User.find({})
		res.send(findall)
	}catch(err){
		console.log(err)
	}
	
})

module.exports = router;
