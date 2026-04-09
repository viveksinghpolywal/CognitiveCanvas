import express from "express";
import Document from "../models/Document.js"
const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const document = await Document.create({ 
      title: req.body.title || "Untitled Document",
      content: req.body.content || "" 
    });
    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: "Failed to create document" });
  }
});

router.get("/",async(req,res)=>{
    try{
        const documents=await Document.find().sort({updatedAt: -1});
        res.status(200).json(documents);
    }catch(error){
        res.status(500).json({ error: "Failed to fetch documents" });
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const document=await Document.findById(req.params.id);
        if(!document){
            return res.status(404).json({ error: "Document not found" });
        }
        res.status(200).json(document);
    }catch(error){
        res.status(500).json({ error: "Failed to fetch document" });
    }
});

router.put("/:id",async(req,res)=>{
    try{
        const document=await Document.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!document){
            return res.status(404).json({ error: "Document not found" });
        }
        res.status(200).json(document);
    }catch(error){
        res.status(500).json({ error: "Failed to update document" });
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const document=await Document.findByIdAndDelete(req.params.id);
        if(!document){
            return res.status(404).json({ error: "Document not found" });
        }
        res.status(200).json(document);
    }catch(error){
        res.status(500).json({ error: "Failed to delete document" });
    }
});



export default router;
