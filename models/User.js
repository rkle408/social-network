// Define Mongoose
const mongoose = require('mongoose');

// New instance of Mongoose schema:
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    thoughts: [
        //Array of _id values referencing the Thought model
    ],
    friends: [
        //Array of _id values referencing the User model (self-reference)
    ],
});

// Compile a model based on the schema
const User = mongoose.model('User', userSchema);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

module.exports = User;