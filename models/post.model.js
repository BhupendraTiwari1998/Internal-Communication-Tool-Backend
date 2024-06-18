import mongoose from "mongoose";
import userModel from "./user.model";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  newPost: {
    type: String,
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: userModel,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model("post", PostSchema);
