import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    description: { type: String, trim: true, default: null },
    coverImage: { type: String, default: null}
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

export default model('Category', CategorySchema);
