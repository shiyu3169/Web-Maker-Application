module.exports = function(app) {
  require('./models/models.server');
  require('./services/user.server')(app);
  require('./services/website.server')(app);
  require('./services/page.server')(app);
  require('./services/widget.server')(app);
};
