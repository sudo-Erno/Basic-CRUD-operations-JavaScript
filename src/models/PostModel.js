const { model, Schema } = require('mongoose');

const postSchema = new Schema({
    username: String,
    picture: Buffer,
    body: String,
    createAt: String,
    
    comments: [{
        username: String,
        body: String
    }],

    likes: [{
        username: String,

    }],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = model('Posts', postSchema);