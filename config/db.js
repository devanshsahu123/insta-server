import mongoose from "mongoose";

const conectDb = async (url) => {
   await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
   console.log('db !!! conected')
}

export default conectDb