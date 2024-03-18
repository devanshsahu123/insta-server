import mongoose from "mongoose";

// Define the schema
const viewSchema = new mongoose.Schema({
    visit: {
        type: Number,
        default: 0
    },
    useDownload: {
        type: Number,
        default: 0
    }
});

// Create the model
const ViewModel = mongoose.model('View', viewSchema);

// Export the model
export default ViewModel
