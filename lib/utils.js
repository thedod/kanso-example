exports.render = function(template,ctx) {
    var result;
    require('dust').render(template,ctx,function(err,out) {
        if (err) { throw err; }
        result=out;
    });
    return result;
}
