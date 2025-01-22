import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId, // Add `type` here
      ref: "User", // Reference the "User" model
      required: true, // Fixed the spelling of `require` to `required`
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId, // Add `type` here as well
      ref: "User",
      required: true,
    },
    message: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true } // Add timestamps for `createdAt` and `updatedAt`
);

const Message = mongoose.model("Message", MessageSchema);
export default Message;
