exports.index = function (req, res) {
  res.render('index', {title: 'index page'});
};

exports.instruction = function (req, res) {
  res.render('instruction', {title: 'instruction page'});
};

exports.about = function (req, res) {
  res.render('about', {title: 'about page'});
};
