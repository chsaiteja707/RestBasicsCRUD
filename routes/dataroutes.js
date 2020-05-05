const express=require('express');

const dataController=require('../controller/datacontroller');

const router=express.Router();

router.get('/posts',dataController.getPosts);

router.post('/addpost',dataController.addPost);

router.put('/editpost/:id',dataController.editPost)

router.delete('/deletepost/:id',dataController.deletePost);

module.exports=router;