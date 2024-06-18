
import mongoose, { Model, Document } from "mongoose";
import { IUser } from "./user.model";

export interface IPost {
   description: string,
   user:IUser,
   imageUrl?:string,
   likes?:string[],
    comments?:any
}

export interface IPostDocument extends IPost, Document {
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  user:{
    userId:{
        type: String,
        required: true,
    },
    profilePhoto:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    LastName:{
        type: String,
        required: true,
    }
  },
 
  likes: {
    type: [String],
    default: "",
  },
  comments:{
   types:mongoose.Schema.Types.ObjectId,
   ref:"comments",
  }
}, { timestamps: true });

export const Post: Model<IPostDocument> = mongoose.models.Post || mongoose.model<IPostDocument>("Post", postSchema);
