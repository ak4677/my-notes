const mongoose =require('mongoose')
const mongoURI= "mongodb://localhost:27017/my-database?readPreference=primary&appName=MongoDB%25Compass&tls=false&directConnection=true"

const connectTomongo=async ()=>{
    await mongoose.connect(mongoURI).then(
        console.log("connection done!")
    )
}

module.exports=connectTomongo;
