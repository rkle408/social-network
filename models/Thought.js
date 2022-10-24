// Define Mongoose
const mongoose = require('mongoose');

// Instance of schema
const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now },
    // check if this is the correct time format
    username: { type: String, required: true },
    reactions: [
        //Array of nested documents created with the reactionSchema
        reactionSchema
    ],
    //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
});

//Subdocument: reaction schema
const reactionSchema = new mongoose.Schema({
    reactionId: , //Use Mongoose's ObjectId data type, Default value is set to a new ObjectId
    reactionBody: { type: String, required: true, maxLength: 280 },
    username: { type: String, required: true },
    createdAt:  { type: Date, default: Date.now },
});

// Create a model based on the schema
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;