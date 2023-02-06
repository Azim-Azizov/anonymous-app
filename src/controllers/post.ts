import { Request, Response } from "express"
import { getPost, replacePost, updatePost, deletePost, toggleLikePost } from "../services/Post"

export const getPostController = async (req: Request, res: Response) => {
    const post = await getPost(req.params.postId)
    res.json({ method: req.method, path: req.path, post: post })
}

export const putPostController = async (req: Request, res: Response) => {
    const update = await replacePost(req.user!._id, req.params.postId, req.body)
    res.json({ method: req.method, path: req.path, update: update })
}

export const patchPostController = async (req: Request, res: Response) => {
    const update = await updatePost(req.user!._id, req.params.postId, req.body)
    res.json({ method: req.method, path: req.path, update: update })
}

export const deletePostController = async (req: Request, res: Response) => {
    const deleted = await deletePost(req.user!._id, req.params.postId)
    res.json({ method: req.method, path: req.path, deleted: deleted })
}

export const patchPostLikeController = async (req: Request, res: Response) => {
    const liked = await toggleLikePost(req.user!._id, req.params.postId)
    res.json({ liked })
}