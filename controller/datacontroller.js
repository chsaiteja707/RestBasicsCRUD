const Post=require('../models/posts');

exports.getPosts=((req,res,next)=>{
    Post.find({deleted:false}).sort({date:-1})
    .then(titles=>{    
        res
          .status(201)
          .json({
            posts: titles
        });
    })
    .catch(err=>{
        console.log(err)
        res.status(404)
        .json({
            message:"err"
        })
    })
})

exports.addPost=((req,res,next)=>{
    const newPost=new Post({
        title:req.body.title
    })
    newPost.save()
    .then(result=>{
        return Post.find().sort({date:-1});
    })
    .then(results=>{
        res.status(201)
        .json({
            posts:results,
            message:'post is added successfully'
        })
    })
    .catch(err=>{
        res.status(404)
        .json({
            message:err
        })
    })
})

exports.deletePost=((req,res,next)=>{
    Post.findByIdAndUpdate(req.params.id,{deleted:true})
    .then((result)=>{    
        if(!result){
            return null;
        }else{
            return Post.find().sort({date:-1});
        }
    })
    .then((results)=>{
        if(!results){
            res.status(201)
            .json({
                message:'post is not found to delete'
            })
        }else{
        res.status(201)
            .json({
                message:'post is deleted successfully',
                posts:results
            })
        }
    })
    .catch(err=>{
        res.status(404)
        .json({
            message:err
        })
    })
});

exports.editPost=((req,res,next)=>{
    const id=req.params.id;
    const title=req.body.name;
    Post.findByIdAndUpdate(id,{title:title})
    .then((result)=>{
        if(!result){
            return null;
        } else {
            return Post.find().sort({date:-1})
        }
    }) 
    .then(results=>{
        if(!results){
            res.status(402)
            .json({
                message:err
            })
        } else {
            res.status(202)
            .json({
                message:"post : "+id+" is updated successfully.",
                posts:results
            })
        }
    })
})