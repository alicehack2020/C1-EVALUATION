const checkPermissionmiddlerware=(req,res,next)=>{
    var routeName = req.route.path || req.route.regexp && req.route.regexp.source
    console.log(routeName);

   // if("/libraries"===routeName)
   // {
       // console.log(routeName);
        var obj={
            route:routeName,
            permission:true
        }
        req.someVariable = obj;
        next()
   // }
    //else if("/authors"===routeName)
//    / {
//         req.someVariable = true;
//         console.log(routeName);
//         next()
    //}

     
     
}
module.exports=checkPermissionmiddlerware;