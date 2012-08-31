exports.cars = function (head,req) {
    provides("html",function() {
        var body = "<ul class=\"nav nav-tabs nav-stacked\">\n";
        while (row = getRow()) {
            body += "<li class=\"car-li\" id=\""+row.id+"\"><a class=\"car-link\" href=\"#"+row.id+"\">"+row.key[0]+" "+row.key[1]+" "+(-row.key[2])+"</a></li>\n";
        }
        body+="</ul>\n";
        return body;
    });
};
