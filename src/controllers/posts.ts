import { Request, Response } from "express"
import { getPosts, postPosts } from "../services/Posts"

export const getPostsController = async (req: Request, res: Response) => {
    const feed = await getPosts()
    res.json({ method: req.method, path: req.path, feed: feed })
}

export const postPostsController = async (req: Request, res: Response) => {
    const post = await postPosts(req.user!._id, req.body.title)
    res.json({ method: req.method, path: req.path, post: post })
}