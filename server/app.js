module.exports = function(app) {
    require("./services/user.server")(app);
    require("./services/website.server")(app);
};
