exports.car = function (doc,req) {
    provides("html",function() {
        var body = "<dl>\n";
        body += "<dt>Make</dt><dd>"+doc.make+"</dd>\n";
        body += "<dt>Model</dt><dd>"+doc.model+"</dd>\n";
        body += "<dt>Year</dt><dd>"+doc.year+"</dd>\n";
        if (doc.description) {
            body += "<dt>Description</dt><dd>"+doc.description+"</dd>\n";
        }
        body += "<dt>Price</dt><dd>"+doc.price+"</dd>\n";
        body+="</dl>\n";
        return body;
    });
};
