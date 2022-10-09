const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.use(bodyParser.json);
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('will send details of dish to u'+req.params.dishId);
})
.post((req,res,next)=>{
    res.end('will add this dish'+req.body.name+'with details'+req.body.description);
});
module.exports=dishRouter;