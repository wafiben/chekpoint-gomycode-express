const express=require('express')
const app=express();
const port=7000;
var day = new Date();
var numberOfDate = day.getDay();
let time = day.getHours()  /* + ":" + day.getMinutes() + ":" + day.getSeconds(); */  
const midelware=(request,response,next)=>{
    if(((numberOfDate>=1)&&(numberOfDate<=5))&&((time>=9)&&(time<=18))){
        console.log('passed')
        request.requestTime = Date.now()
        
        next();
    } 
    
    else{
        console.log('we work only from Monday to Friday from 9 to 17')
        }
}
app.use(midelware)

app.get('/',(request,response)=>{
    console.log(request.requestTime)
    response.sendFile(__dirname+'/views/Homepage.html')
  
})
app.get('/contact',(request,response)=>{
    response.sendFile(__dirname+'/views/ContactUs.html')
});
app.get('/services',(request,response)=>{
    console.log(request.requestTime)
    response.sendFile(__dirname+'/views/OurServices.html')
})
app.get('/style/style.css',(request,response)=>{
    response.sendFile(__dirname+'/views/style/style.css'); 
}) 
app.listen(port, (err) => {
    if(err){console.log(err)}
    console.log(`app listening at http://localhost:${port}`) 
   });