import { Router } from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryBySlug,
  updateCategory,
  deleteCategory,
} from '../controllers/category.controllers';
import adminAuth from '../middlewares/adminAuth.middlewares';

const router = Router();

router.post('/', adminAuth,  createCategory);
router.get('/', getAllCategories);
router.get('/:slug', getCategoryBySlug);
router.put('/:slug', adminAuth, updateCategory);
router.delete('/:slug', adminAuth,  deleteCategory);

export default router;
