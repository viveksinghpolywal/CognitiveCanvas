import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {type:String,default: "Untitled Document"},
    content: String,
    
}, {timestamps: true});

const Document = mongoose.model("Document", schema, "Notes");

export default Document;