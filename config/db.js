import mongoose from "mongoose";

const conectDb = async(url)=>{
   await mongoose.connect( url)
   console.log('db !!! conected')
}

 export default conectDb