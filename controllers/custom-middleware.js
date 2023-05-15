const Post = require('../models/post');

module.exports.setPost = async function (req, res, next) {
  let post = await Post.find();
  res.locals.posts = Array.from(post);
  next();
};
