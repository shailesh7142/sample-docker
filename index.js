
const exxpress = require('express');

const app = exxpress();

app.get("/",(req,res)=>{
    res.send("hi sky");
});

app.listen(8080,()=>{
   console.log("listing at port 8080");
})