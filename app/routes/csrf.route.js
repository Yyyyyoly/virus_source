const csurf = require('csurf');
const url = require('url');

module.exports = function (app) {
  app.use((req, res, next) => {
    const pathName = url.parse(req.originalUrl).pathname;

    //  针对特殊的api路由/external 去掉csrf控制
    if (pathName.indexOf('/external') === -1) {
      csurf({ cookie: true })(req, res, () => {
        res.locals.csrfToken = req.csrfToken();
        next();
      });
    } else {
      next();
    }
  });
};
