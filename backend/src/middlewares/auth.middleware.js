import JWT from "jsonwebtoken";
import User from "../models/user.model.js";
export const protectRoute = (req, res, next) => {
    try {
        const token = req.cookies.JWT
        if (!token) {
            res.status(400).json({ "message": "unauthorize request!!" })
        }
        const decoded = JWT.verify(token, process.env.JWT_SECRET)
        if (!decoded) {
            res.status(400).json({ "message": "unauthorize request!!" })
        }
        const user = User.findById(decoded.userId).select("-password");
        if(!user){
            res.status(400).json({ "message": "user not found!!" })
            
        }
        req.user=user;
        next()

    } catch (error) {
        console.error("Error in signup controller:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
}