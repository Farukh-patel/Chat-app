import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";
config();

cloudinary.config({
    CLOUDANARY_NAME: process.env.CLOUDANARY_NAME,
    CLOUDANARY_API_KEY: process.env.CLOUDANARY_API_KEY,
    CLOUDANARY_SECRET: process.env.CLOUDANARY_SECRET,
})
export default cloudinary;