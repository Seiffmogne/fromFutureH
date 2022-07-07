const express= require('express');
const  path  = require('path');
const app=express();

app.use(express.static('dist/future'));

app.get('/*',(req,res)=>{
res.status(200).sendFile(path.join(__dirname+'/src/index.html'));
});

//LAst change

const port=process.env.PORT || 8080;

app.listen(process.env.PORT || 8080, ()=>{
    console.log(`Listening on Port ${port} ...`);
});