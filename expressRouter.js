const express=require('express');
const http=require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');

const dishRouter=require('./routes/dishRouter');

const port=3000;
const hostname='localhost';
const app=express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.use('./dishes',dishRouter);

app.all('/dishes',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/dishes:dishId',(req,res,next)=>{
    res.end('will send details of dish to u'+req.params.dishId);
});
app.post('/dishes',(req,res,next)=>{
    res.end('will add this dish'+req.body.name+'with details'+req.body.description);
});
app.use((req,res,next)=>
{
    console.log(req.headers);
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is Express server</h1></body></html>');

});
const server=http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server run at ${hostname} and ${port}`);
})