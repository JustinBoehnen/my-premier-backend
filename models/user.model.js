const mongoose = require('mongoose')
//const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//Defaults for user accounts
var userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: "id can't be empty",
    unique: true
  },
  name: {
    type: String,
    required: "name can't be empty"
  },
  email: {
    type: String,
    required: "email can't be empty",
    unique: true
  },
  password: {
    type: String,
    required: "password can't be empty",
    minlength: [8, 'password must be at least 8 characters long']
  },
  role: {
    type: String,
    required: "role can't be empty"
  },
  saltSecret: String
})

userSchema.statics.generateJwt = user => {
  return jwt.sign(
    { id: user.id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXP
    }
  )
}

module.exports = mongoose.model('User', userSchema)
