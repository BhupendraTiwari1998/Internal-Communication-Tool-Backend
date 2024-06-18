import express from 'express'
import { addPost, deletePost, getPost, getSinglePost, updatePost,getPostOfUser } from '../controllers/post.controller';

const router = express.Router();

router.post('/add-post',addPost)
router.get(`/getPost`, getPost)
router.get('/get-singlepost/:single_id',getSinglePost)
router.get('/get-postofuser/:userid',getPostOfUser)
router.put('/update-post/:update_id',updatePost)
router.delete('/delete-post/:delete_id',deletePost)

export default router;