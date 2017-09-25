module.exports = function (app) {
  app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  });
};
