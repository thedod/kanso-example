exports.empty = {
  map: function(doc) {}
};

exports.sorted = {
    map: function (doc) {
        emit([doc.make,doc.model,-doc.year], doc);
    }
};
