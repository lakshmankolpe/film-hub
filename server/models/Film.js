import { model, Model,Schema } from "mongoose";

const filmSchema = new Schema({
title: String,
shortDescription:String,
director:String,
poster:String,
releaseYear:Number,
category:String,
language:String,
rating:Number,
},{
    timestamps:true
})

const Film = model("Film",filmSchema)

export default Film;