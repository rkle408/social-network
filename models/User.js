// Define Mongoose
const { Schema, model } = require('mongoose');

// New instance of Mongoose schema:
const userSchema = new Schema(
    {
        username: { type: String, unique: true, required: true, trim: true },
        email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
        thoughts: [
            //Array of _id values referencing the Thought model
            { 
                type: Schema.Types.ObjectId,
                ref: 'Thought', 
            }
        ],
        friends: [
            //Array of _id values referencing the User model (self-reference)
            {
                type: Schema.Types.ObjectId,
                default: () => new Types.ObjectId(),
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Compile a model based on the schema
const User = model('User', userSchema);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

module.exports = User;