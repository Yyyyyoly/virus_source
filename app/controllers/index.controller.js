exports.index = function (req, res) {
  res.render('index', {title: 'index page'});
};

exports.about = function (req, res) {
  res.render('about', {title: 'about page'});
};
