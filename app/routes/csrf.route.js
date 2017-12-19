const csurf = require('csurf');

module.exports = function (app) {
  app.use((req, res, next) => {
    const originalUrl = req.originalUrl.pathname;
    if (originalUrl.indexOf('/external') === -1) {
      csurf({ cookie: true });
      res.locals.csrfToken = req.csrfToken();
    }

    next();
  });
};
