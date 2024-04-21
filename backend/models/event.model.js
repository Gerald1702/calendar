import { Schema, Types, model } from "mongoose";

const userSchema = new Schema({
  userId: {type:Types.ObjectId, required:true },
  title: { type:String,required:true },  
  startDate:{type:Date, required:true},
  endDate:{type:Date, required:true},

});

export const userModel = model("event", userSchema, "users")