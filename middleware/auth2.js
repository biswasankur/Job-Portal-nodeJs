const jwt=require('jsonwebtoken');

exports.authjwt2=(req,res,next)=>{
    if(req.cookies && req.cookies.empToken){
        jwt.verify(req.cookies.empToken ,'souvikmondalhelowelcome@12345678910',(err,data)=>{
            req.emp=data,
            next();
        })
    }else{
        next()
    }
}