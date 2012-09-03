exports.car = function (doc,req) {
    return require('lib/utils').render("car.html",doc);
};
