import mongoose from "mongoose"

mongoose.set('strictQuery', true)

mongoose.connect(process.env.DB_URI)
	.then(() => console.log("DB CONNECT"))
	.catch((err) => console.error("DB FAIL" + err))