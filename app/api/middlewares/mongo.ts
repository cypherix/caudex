import mongoose from "mongoose";

// Define the schema for the files within a page
const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
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

// MongoDB connection URI
const URI = 'mongodb://127.0.0.1:27017/caudex';

// Function to connect to MongoDB with error handling
export const connectMongo = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Successfully connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

// Automatically close the connection when the process ends
process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
});
