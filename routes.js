import express from "express"
import { getPosts,getPostByParams, getPostByQuery, postPosts,putPosts, patchPosts,deletePost } from "./controller.js"

const router = express.Router()
router.get("/allPosts",getPosts)
router.get("/postByParams/:id",getPostByParams)
router.get("/postByQuery",getPostByQuery)
router.post("/posts",postPosts)
router.put("/putPost/:id",putPosts)
router.patch("/patchPost/:id",patchPosts)
router.delete("/deletePost/:id",deletePost)

export default router