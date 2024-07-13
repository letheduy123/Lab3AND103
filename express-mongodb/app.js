const express=require('express');//tham chieu thu vien
const mongoose =require('mongoose');
const sinhVienRoute=require('./routes/sinhVienRoute');
const bodyParser = require('body-parser');

//tao doi tuong express
const app=express();
//ket noi mongodb
mongoose.connect('mongodb://localhost:27017/AND103',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Ket noi thanh cong mongodb');
}).catch((err)=>{
    console.log('Loi ket noi:'.err);
});
//doc json
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
//su dung route
app.use('/sinhvien',sinhVienRoute);
app.use('/',sinhVienRoute);
//su dung ejs lam engine
app.set('view engine','ejs');
//khoi dong serve
const PORT =process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("serve dang chay cong 3000");
});