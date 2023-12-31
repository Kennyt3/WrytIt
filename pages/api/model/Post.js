const mongoose = require('mongoose')
const { Schema } = mongoose

const PostSchema = new Schema(
  {
    title: String,
    link: String,
    locale: String,
    name: String,
    date: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
)

const PostModel = mongoose.models.Post || mongoose.model('Post', PostSchema)

module.exports = PostModel
