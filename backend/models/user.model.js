import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  email: {type:String, required:true },
  password: { type:String,required:true },
});

export const eventModel= model('user', eventSchema, 'users')
