import mongoose from "mongoose";

// Define the schema for the files within a page
const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        
    }
});

// Define the schema for a page, which contains multiple files
const PageSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true // Ensure that each slug is unique
    },
    files: [FileSchema]
});

// Check if the 'Page' model already exists before defining it
export const PageModel = mongoose.models.Page || mongoose.model('Page', PageSchema);

// File: lib/mongodb.ts


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/caudex';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Define the shape of our global mongoose object
interface GlobalMongoDB {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Declare the global type
declare global {
  var mongoose: GlobalMongoDB | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;

// The rest of your code (route.ts and models/Page.ts) remains the same as in the previous response
