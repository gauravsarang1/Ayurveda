// db.ts
import mongoose from 'mongoose';

if(!process.env.MONGO_URI) {
  console.error('mongo uri not loaded')
}

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/blogdb';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      tls: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit the app if DB fails to connect
  }
};
