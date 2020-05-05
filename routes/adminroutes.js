const express=require('express');

const adminController=require('../controller/admincontroller');

const router=express.Router();

router.get('/admin/posts',adminController.getAllPosts);

router.delete('/admin/deletepost/:id',adminController.permanantDelete);

module.exports=router;