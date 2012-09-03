See [demo](https://thedod.iriscouch.com/example/_design/example-app/_rewrite/)

See [wiki](https://github.com/thedod/kanso-example/wiki) for more information

To upload the sample data, run `./upload-data.sh http://localhost:5984/example`

### Changes from master branch

This branch also uses the [dust](http://akdubya.github.com/dustjs/) template engine.

Instead of a static index.html, we use the `templates/homepage.html` template,
although effectively a static page (no `{...}` fields).

`lib/rewrites.js` maps `/` to `_list/homepage/empty`,
where `empty` is a dummy view (defined at `lib/views.js`) that returns nothing.
