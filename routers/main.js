const express=require("express")
const router=express.Router()
const checkPermissionmiddlerware=require("../middleware/checkPermissionmiddlerware")


    router.get("/books",(req,res,next)=>{
        res.send("books");
      //  next()
    })

    router.get("/libraries",checkPermissionmiddlerware,(req,res,next)=>{
       
        res.send(req.someVariable);
      //  next()
    })

    router.get("/authors",checkPermissionmiddlerware,(req,res,next)=>{
        res.send(req.someVariable);
      //  next()
    })


    
 



module.exports=router;