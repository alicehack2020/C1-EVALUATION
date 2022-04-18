const express=require("express")
const router=express.Router()
const checkPermissionmiddlerware=require("../middleware/checkPermissionmiddlerware")


    router.get("/books",(req,res,next)=>{
      var routeName = req.route.path || req.route.regexp && req.route.regexp.source
        res.send({ route: routeName});
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