const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
// const User=mongoose.model('user',UserSchema);
// User.createIndexes();
module.exports=mongoose.model('user',UserSchema);