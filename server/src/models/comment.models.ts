// models/Category.ts
import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
);

// Optional: Automatically generate slug from name before saving
CategorySchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = this.name.replace(/\s+/g, '-');
  }
  next();
});

export default model('Category', CategorySchema);
