// Define Mongoose
const { Schema, model } = require('mongoose');

// Instance of schema
const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
        createdAt: { type: Date, default: Date.now },
        // check if this is the correct time format
        username: { type: String, required: true },
        //Array of nested documents created with the reactionSchema
        //reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

//Subdocument: reaction schema
// const reactionSchema = new Schema({
//     //Use Mongoose's ObjectId data type, Default value is set to a new ObjectId
//     reactionId: { type: Schema.Types.ObjectId, ref: 'user' }, 
//     reactionBody: { type: String, required: true, maxLength: 280 },
//     username: { type: String, required: true },
//     createdAt:  { type: Date, default: Date.now },
// });

// Create a model based on the schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;