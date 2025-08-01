// models/SessionUser.ts
import { Schema, model } from 'mongoose';

const SessionUserSchema = new Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true
    },
    lastSeen: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true // Adds createdAt and updatedAt
  }
);

// Optional: Update `lastSeen` whenever the document is accessed
// You can also update it manually in your route middleware

export default model('SessionUser', SessionUserSchema);
