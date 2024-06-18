import PostModel from "../models/post.model"


export const addPost = (req, res)=>{
    try {
        const {newPost, userID} = req.body;

        const postadd = new PostModel({
            newPost: newPost,
            userID: userID,
        })
        postadd.save()

        if(postadd){
            return res.status(200).json({
                data:postadd,
                message:"Post Created"
            })
        }

        return res.status(400).json({
            message: "Bad Request"
        })
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const getPost = async (req,res) => {
    try {
        const getPost = await PostModel.find().populate("userID")
        // console.log(getPost)
        if(getPost){
            return res.status(200).json({
                data: getPost,
                message: "Fetched"
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
export const getSinglePost = async(req, res)=>{
    try {
        const singleID = req.params.single_id;

        const singlePost = await PostModel.findOne({_id: singleID})
        if(singlePost){
            return res.status(200).json({
                data: singlePost,
                message: "fetched"
            })
        }

        return res.status(400).json({
            message: "Bad Request"
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const getPostOfUser = async(req, res)=>{
    try {
        const singleID = req.params.userid;

        const singlePost = await PostModel.find({userID: singleID})
        if(singlePost){
            return res.status(200).json({
                data: singlePost,
                message: "fetched"
            })
        }

        return res.status(400).json({
            message: "Bad Request"
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const deletePost = async(req, res)=>{
    try {
        const deleteID = req.params.delete_id;

        const post_delete = await PostModel.deleteOne({_id: deleteID})

        if(post_delete.acknowledged){
            return res.status(200).json({
                data: post_delete,
                message: "Deleted Successfully"
            })
        }

        return res.status(400).json({
            message: "Bad Request"
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}

export const updatePost = async(req, res)=>{
    try {
        const updateID = req.params.update_id;

        const {newPost, userID} = req.body;
        const post_update = await PostModel.updateOne({_id: updateID},{
            $set:{
                newPost: newPost,
                userID: userID
            }
        })

        if(post_update.acknowledged){
            return res.status(200).json({
                data: post_update,
                message: "Updated Successfully"
            })
        }

        return res.status(400).json({
            message: "Bad Request"
        })
        
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}