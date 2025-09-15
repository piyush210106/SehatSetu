import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_BD_URI}/${process.env.MONGO_DB_NAME}`);
        console.log("MongoDB connected!!");
    }
    catch(e){
        console.error("Error in connecting DB ", e);
    }
}

export default connectDB;