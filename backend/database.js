const mongoose =require('mongoose')
const mongoURI= "your mangodb URL"

const connectTomongo=async ()=>{
    await mongoose.connect(mongoURI).then(
        console.log("connection done!")
    )
}

module.exports=connectTomongo;
