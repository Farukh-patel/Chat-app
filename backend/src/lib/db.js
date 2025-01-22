import mongoose from "mongoose";

export const connectMongo = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongoDB connected :${(await conn).connection.host}`);

    } catch (error) {
        console.log("mongodb connection error", error);

    }
}