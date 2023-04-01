const User = require('../models/userModel');
const bcrypt = require('bcrypt');


exports.login = async (req,res)=>{
    const user_exists = await User.findOne({email});
    if (user_exists) return res.status(403).json({message:'User already exists'});
    const{email,password,role}= req.body;

    const user = await User
    user.email = email;
    hashed_password= bcrypt.hash(password,10);
    user.role = role;
    user.password = hashed_password;
    user.save();
}
exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (!user) return res.status(404).json({ message: "Invalid Credentials" });
  
    const isMatched = user.matchPassword(password);
    if (!isMatched) return res.status(404).json({ message: "Invalid Credentials" });
  
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY);
  
    res.json({ token })
  
  }