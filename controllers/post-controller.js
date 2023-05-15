const Post = require('../models/post');

module.exports.create = async (req, res) => {
  post = await Post.create(req.body);
  console.log(post);
  res.redirect('/');
};
module.exports.show = async (req, res) => {
  const id = req.params.id;
  let post = await Post.findById(id);
  res.render('sepratePost', { post: post });
};
