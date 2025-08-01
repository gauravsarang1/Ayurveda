import { Schema, model } from 'mongoose';

const BlogPostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    content: { type: String, required: true },
    coverImage: { type: String, default: null },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'AdminUser' },
    likes: [{ type: String }], // store sessionIds
    views: [{type: String}],
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

BlogPostSchema.pre('validate', function(next){ 
  if(!this.isModified('title')) return next()
  this.slug = createSlug(this.title)
  next()
})

const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")       // Remove non-word characters
    .replace(/\s+/g, "-")           // Replace spaces with -
    .replace(/--+/g, "-");          // Replace multiple - with single -
};


export default model('BlogPost', BlogPostSchema);
