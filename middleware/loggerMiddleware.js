const loggerMiddleware=(req,res,next)=>{
    let fullUrl = req.headers.host + req.originalUrl;
    console.log(fullUrl);
    next()
}
module.exports=loggerMiddleware;