
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    },

    work: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    cpassword: {
        type: String,
        required: true
    }
})


// We're hashing the Password
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
    console.log("Inside Password hashing")
})


// Collection creation
const Users = mongoose.model('User', userSchema)

module.exports = Users
