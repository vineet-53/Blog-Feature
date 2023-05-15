
module.exports.home = (req, res) => {
  res.render("home" , {post : res.locals.posts});
};

module.exports.compose = (req,res)=>{
  res.render('compose')
}
