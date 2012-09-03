var utils = require('lib/utils');

exports.cars = function (head,req) {
    provides("html",function() {
        var rows = [];
        while (row = getRow()) {
	    rows.push({
	        id: row.id,
		name: row.key[0]+" "+row.key[1]+" "+(-row.key[2])
	    });
        }
        send(utils.render("cars.html",{"cars":rows}));
    });
};

exports.homepage = function (head,req) {
    provides("html",function() {
        send(utils.render("homepage.html",{}));
    });
}
