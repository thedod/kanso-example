var render = function(template,ctx) {
    var result;
    require('dust').render(template,ctx,function(err,out) {
        if (err) { throw err; }
        result=out;
    });
    return result;
}

exports.cars = function (head,req) {
    provides("html",function() {
        rows = [];
        while (row = getRow()) {
	    rows.push({
	        id: row.id,
		name: row.key[0]+" "+row.key[1]+" "+(-row.key[2])
	    });
        }
        send(render("cars.html",{"cars":rows}));
    });
};

exports.homepage = function (head,req) {
    provides("html",function() {
        send(render("homepage.html",{}));
    });
}
