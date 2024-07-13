//chua cac api
const express =require('express');//tham chieu thu vien
const router=express.Router();//dieu huong loi goi ham
const sinhvien=require('../models/sinhVienModel');//tham chieu den model

//GET
router.get('/',async(req,res)=>{//khi nguoi dung goi locahot 3000
    try{
        const sinhviens=await sinhvien.find();//lay tat ca sinh vien trong bang du lieu
        // res.json(sinhviens)//tra ve json
        res.render('sinhviens',{sinhvien:sinhviens});//tra ve file ejs
        console.log(sinhviens);
    }catch(err){
        console.error(err);//in loi
        res.status(500).json({error:'Khong ket noi duoc voi server'});
    }

});
//POST :TAO moi sinh vien
//http://localhost:3000/sinhvien
router.post('/',async(req,res)=>{
    try{
        const {id,name}=req.body;//nhap id va name
        const sinhvien1=new sinhvien({id,name});//tao doi tiuong sv1 voi 2 gia tri id va name
        await sinhvien1.save();//luu vao co so du lieu
        res.status(201).json(sinhvien1);//tra ve ket qua cho nguoi dung biet
        console.log('sinhvien1');
    }catch(err){
        console.error(err);
        res.status(500).json({error:"khong ket noi duoc voi server"});

    }
});
//PUT CAP NHAP SINH VIEN
//http://localhost:3000/sinhvien/:_id
router.put('/:_id',async(req,res)=>{
    try{
const {_id}=req.params;//nhan than so truyen vao
const {name,id}=req.body;//lay noi dung nguoi dung nhap
//thuc hien update
const updateSinhVien=await sinhvien.findByIdAndUpdate(_id,{id,name},{new:true});
res.json(updateSinhVien);//tra ve cho nguoi dung ket qua
console.log(updateSinhVien);//in ra ket qua


    }catch(error){
console.error(error);
res.status(500).json({error:'Khong ket noi duoc voi server'});
    }
});
module.exports=router;
