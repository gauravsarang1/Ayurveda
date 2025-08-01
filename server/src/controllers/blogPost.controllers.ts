import { Request, Response } from 'express';
import Blog from '../models/blogPost.models';
import ApiError from '../utils/ApiError.utils';
import ApiResponse from '../utils/ApiResponse.utils';
import asyncHandler from '../utils/asyncHandler.utils';
import { error } from 'console';
import { strict } from 'assert';

// CREATE a blog post
export const createBlog = asyncHandler(async (req: Request, res: Response) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    throw new ApiError(400, 'Title, content, and author are required');
  }

  const blogPost = await Blog.create({ title, content, author });

  res.status(201).json(
    new ApiResponse(201, blogPost, 'Blog post created successfully', true)
  );
});

// GET all blog posts
export const getAllBlogs = asyncHandler(async (req: Request, res: Response) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(200, blogs, 'All blog posts retrieved', true)
  );
});

// GET a single blog post
export const getBlogById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new ApiError(404, 'Blog post not found');
  }

  res.status(200).json(
    new ApiResponse(200, blog, 'Blog post fetched', true)
  );
});

// Get Blog by Slug

export const getBlogBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const sessionId:string = req.sessionID 

  const blog = await Blog.findOne({ slug });
  if (!blog) throw new ApiError(404, 'Blog not found');

  // Ensure blog.views is initialized
  if (sessionId && (!blog.views || !blog.views.includes(sessionId))) {
    blog.views = blog.views || [];
    blog.views.push(sessionId);
    await blog.save({ validateBeforeSave: false }); // Await is important
  }

  res
    .status(200)
    .json(new ApiResponse(200, {
        blog,
        isLiked: blog.likes.includes(sessionId),
        isViewed: blog.views.includes(sessionId)
    }, 'Fetched blog by slug', true));
});


// UPDATE a blog post
export const updateBlog = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  const updatedBlog = await Blog.findByIdAndUpdate(
    id,
    { title, content, author },
    { new: true, runValidators: true }
  );

  if (!updatedBlog) {
    throw new ApiError(404, 'Blog post not found');
  }

  res.status(200).json(
    new ApiResponse(200, updatedBlog, 'Blog post updated successfully', true)
  );
});

// DELETE a blog post
export const deleteBlog = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const deletedBlog = await Blog.findByIdAndDelete(id);

  if (!deletedBlog) {
    throw new ApiError(404, 'Blog post not found');
  }

  res.status(200).json(
    new ApiResponse(200, deletedBlog, 'Blog post deleted successfully', true)
  );
});

export const toggleBlogReaction = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const sessionId = req.sessionID;

  if (!sessionId) {
    throw new ApiError(400, 'Session ID not found.');
  }

  const blog = await Blog.findOne({ slug });

  if (!blog) {
    throw new ApiError(404, 'Blog post not found.');
  }

  const hasLiked = blog.likes.includes(sessionId);

  if (hasLiked) {
    blog.likes = blog.likes.filter(id => id !== sessionId);
  } else {
    blog.likes.push(sessionId);
  }

  await blog.save({ validateBeforeSave: false });

  res.status(200).json(
    new ApiResponse(
      200,
      { likes: blog.likes.length, liked: !hasLiked },
      hasLiked ? 'Like removed' : 'Blog liked',
      true
    )
  );
});
