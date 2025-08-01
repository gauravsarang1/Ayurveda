import { Request, Response } from 'express';
import Category from '../models/category.models';
import asyncHandler from '../utils/asyncHandler.utils';
import ApiError from '../utils/ApiError.utils';
import ApiResponse from '../utils/ApiResponse.utils';

// Create a new category
export const createCategory = asyncHandler(async (req: Request, res: Response) => {
  const { name, description, coverImage } = req.body;

  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    throw new ApiError(400, 'Category already exists');
  }

  const slug = name.toLowerCase().trim().replace(/\s+/g, '-');

  const category = await Category.create({ name, slug, description, coverImage });

  res.status(201).json(
    new ApiResponse(201, category, 'Category created successfully')
  );
});

// Get all categories
export const getAllCategories = asyncHandler(async (_req: Request, res: Response) => {
  const categories = await Category.find().sort({ createdAt: -1 });

  res.status(200).json(
    new ApiResponse(200, categories, 'All categories fetched successfully')
  );
});

// Get category by slug
export const getCategoryBySlug = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const category = await Category.findOne({ slug });
  if (!category) {
    throw new ApiError(404, 'Category not found');
  }

  res.status(200).json(
    new ApiResponse(200, category, 'Category fetched successfully')
  );
});

// Update category
export const updateCategory = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const { name, description, coverImage } = req.body;

  const newSlug = name?.toLowerCase().trim().replace(/\s+/g, '-');

  const updatedCategory = await Category.findOneAndUpdate(
    { slug },
    { name, slug: newSlug, description, coverImage },
    { new: true }
  );

  if (!updatedCategory) {
    throw new ApiError(404, 'Category not found');
  }

  res.status(200).json(
    new ApiResponse(200, updatedCategory, 'Category updated successfully')
  );
});

// Delete category
export const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
  const { slug } = req.params;

  const deletedCategory = await Category.findOneAndDelete({ slug });

  if (!deletedCategory) {
    throw new ApiError(404, 'Category not found');
  }

  res.status(200).json(
    new ApiResponse(200, {}, 'Category deleted successfully')
  );
});
