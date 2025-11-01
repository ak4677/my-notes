const mongoose =require('mongoose')
const mongoURI= "mongodb://localhost:27017/?directConnection=true&tls=false&readPreference=primary&appName=MongoDB%25Compass"

const connectTomongo=async ()=>{
    await mongoose.connect(mongoURI).then(
        console.log("connection done!")
    )
}

module.exports=connectTomongo;
