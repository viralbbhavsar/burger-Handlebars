var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
    }


}


// Export the database functions for the controller (catsController.js).
module.exports = burger;
