const Post=require('../models/posts');

exports.permanantDelete=((req,res,next)=>{
    Post.findByIdAndDelete(req.params.id)
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

exports.getAllPosts=((req,res,next)=>{
    Post.find().sort({date:-1})
    .then(titles=>{    
        res
          .status(201)
          .json({
            posts: titles,
         });
    })
    .catch(err=>{
        res.status(404)
        .json({
            message:err
        })
    }) 
})