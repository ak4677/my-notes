const mongoose =require('mongoose')
const mongoURI= "mongodb://localhost:27017/?readPreference=primary&appname=my-notes&ssl=false&directConnection=true"

const connectTomongo=async ()=>{
    await mongoose.connect(mongoURI).then(
        console.log("connection done!")
    )
}

module.exports=connectTomongo;
