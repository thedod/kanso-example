Kanso boilerplate
-----------------

Just trying to continue beyond the last step of kanso's [getting started](http://kan.so/docs/Third-party_modules) and make a simple app that has a view, a show, and a list. Also uses the [bootstrap package](http://kan.so/packages/details/bootstrap) (nothing fancy. Mainly shows that the less compiler works).

This branch also uses [dust](http://akdubya.github.com/dustjs/) templates (without the [duality](http://kan.so/docs/Duality) framework).

Instead of a static index.html, we use the `templates/homepage.html` template,
which is actually a static page (no `{...}` fields).

`lib/rewrites.js` maps `/` to `_list/homepage/empty`,
where `empty` is a dummy view (defined at `lib/views.js`) that returns nothing.

To upload the sample data, run `./upload-data.sh http://localhost:5984/example`
