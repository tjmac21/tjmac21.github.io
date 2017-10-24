For testing changes locally see development environment info below
To publish your changes to GitHub Pages run $ npm run build (this runs webpack -p for production) to update the build, then $ git commit and $ git push to make your changes live

# Single Page Apps for GitHub Pages

GitHub Pages with React.js using spa-github-pages

#### Why it's necessary
GitHub Pages doesn't natively support single page apps. When there is a fresh page load for a url like `example.tld/foo`, where `/foo` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/foo`.

#### How it works
When the GitHub Pages server gets a request for a path defined with frontend routes, e.g. `example.tld/foo`, it returns a custom `404.html` page. The [custom `404.html` page contains a script][404html] that takes the current url and converts the path and query string into just a query string, and then redirects the browser to the new url with only a query string and hash fragment. For example, `example.tld/one/two?a=b&c=d#qwe`, becomes `example.tld/?p=/one/two&q=a=b~and~c=d#qwe`.

The GitHub Pages server receives the new request, e.g. `example.tld?p=/...`, ignores the query string and hash fragment and returns the `index.html` file, which has a [script that checks for a redirect in the query string][indexHtmlScript] before the single page app is loaded. If a redirect is present it is converted back into the correct url and added to the browser's history with `window.history.replaceState(...)`, but the browser won't attempt to load the new url. When the [single page app is loaded][indexHtmlSPA] further down in the `index.html` file, the correct url will be waiting in the browser's history for the single page app to route accordingly. (Note that these redirects are only needed with fresh page loads, and not when navigating within the single page app once it's loaded).

A quick SEO note - while it's never good to have a 404 response, it appears based on [Search Engine Land's testing][seoLand] that Google's crawler will treat the JavaScript `window.location` redirect in the `404.html` file the same as a 301 redirect for its indexing. From my testing I can confirm that Google will index all pages without issue, the only caveat is that the redirect query is what Google indexes as the url. For example, the url `example.tld/about` will get indexed as `example.tld/?p=/about`. When the user clicks on the search result, the url will change back to `example.tld/about` once the site loads.



#### Development environment
I have included `webpack-dev-server` for testing changes locally. It can be accessed by running `$ npm start` (details below), or you can use your own dev setup by running `$ webpack` and serving the `index.html` file and the `404.html` file for 404s. Note that `webpack-dev-server` automatically creates a new bundle whenever the source files change and serves the bundle from memory, so you'll never see the bundle as a file saved to disk.
- `$ npm start` runs the [start script][startScript] in `package.json`, which runs the command `$ webpack-dev-server --devtool eval-source-map --history-api-fallback --open`
  - `-devtool eval-source-map` is for [generating source maps][webpackDevtool] in while in development
  - `--history-api-fallback` allows for frontend routing and will serve `index.html` when the requested file can't be found
  - `--open` will open automatically open the site in your browser
- `webpack-dev-server` will serve `index.html` at `http://localhost:8080` (port `8080` is the default). Note that you must load the `index.html` from the server and not just open it directly in the browser or the scripts won't load.

#### Miscellaneous
- The `.nojekyll` file in this repo [turns off Jekyll for GitHub Pages][nojekyll]
- Need form submission on your static site? Use [Formspree][formspree]
- One of the great things about the GitHub Pages CDN is that all files are automatically compressed with gzip, so no need to worry about compressing your JavaScript, HTML or CSS files for production

<!-- links to github docs -->
[ghPagesOverview]: https://pages.github.com/
[ghPagesBasics]: https://help.github.com/categories/github-pages-basics/
[ghPagesTypes]: https://help.github.com/articles/user-organization-and-project-pages/
[customDomain]: https://help.github.com/articles/quick-start-setting-up-a-custom-domain/
[nojekyll]: https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/

<!-- other links -->
[liveExample]: http://spa-github-pages.rafrex.com
[react]: https://github.com/facebook/react
[reactRouter]: https://github.com/ReactTraining/react-router
[seoLand]: http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157
[webpackProduction]: https://webpack.js.org/guides/production-build/#the-automatic-way
[webpackDevtool]: https://webpack.js.org/configuration/devtool/
[reactInteractive]: https://github.com/rafrex/react-interactive
[formspree]: http://formspree.io/