import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  toggleBlogReaction
} from '../controllers/blogPost.controllers';
import adminAuth from '../middlewares/adminAuth.middlewares';

const router = express.Router();

// Public routes
router.get('/', getAllBlogs);
router.get('/slug/:slug', getBlogBySlug); // more specific first
router.get('/:id', getBlogById);     
router.post('/reaction', toggleBlogReaction)

// Protected admin routes
router.post('/', adminAuth, createBlog);
router.put('/:id', adminAuth, updateBlog);
router.delete('/:id', adminAuth, deleteBlog);

export default router;
