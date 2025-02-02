import JWT from "jsonwebtoken";

export const generateToken = (userId, res) => {
    try {
        const token = JWT.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "7d"
        });

        res.cookie("JWT", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        });
        return token
        
    } catch (error) {
        console.error("Error generating token:", error.message);
        throw error; // Propagate the error to the caller
    }
};