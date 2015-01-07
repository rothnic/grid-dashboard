# grid-dashboard

Starter dashboard app using react-starter/webpack, reactjs, react-grid-layout. The intent is to develop some 
reusable widgets that could be used in a dashboard app.

Current entry point is simply the react-grid-layout example integrated as a new entry point at /dashboard. So, you 
can access this at localhost:8080/dashboard.

## Installation

Clone, then:

``` text
npm install
```

## Development server

``` text
# start the webpack-dev-server
npm run dev-server
# wait for the first compilation is successful

# in another terminal/console
# start the node.js server in development mode
npm run start-dev

# open this url in your browser
http://localhost:8080/
```

The configuration is `webpack-dev-server.config.js`.

Static HTML is served from `config/dev-server-public`.

It automatically recompiles and refreshes the page when files are changed.


## Hot Module Replacement development server

``` text
# start the webpack-dev-server in HMR mode
npm run hot-dev-server
# wait for the first compilation is successful

# in another terminal/console
# start the node.js server in development mode
npm run start-dev

# open this url in your browser
http://localhost:8080/
```

The configuration is `webpack-hot-dev-server.config.js`.

Static HTML is served from `config/dev-server-public`.

It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

Hot Module Replacement has a performance impact on compilation.


## Production compilation and server

``` text
# build the client bundle and the prerendering bundle
npm run build

# start the node.js server in production mode
npm run start

# open this url in your browser
http://localhost:80/
```

The configuration is `webpack-production.config.js`.

The server is at `lib/server.js`

The production setting builds two configurations: one for the client (`build/public`) and one for the serverside prerendering (`build/prerender`).


## Common changes to the configuration

### Add more entry points

(for a multi page app)

1. Add an entry point to `make-webpack-config.js` (`var entry`).
2. Add a new top-level react component in `app`.
3. (Optional) Enable `commonsChunk` in `webpack-production.config.js` and add `<script src="COMMONS_URL"></script>` to `app/prerender.html`.
4. Add a new HTML file in `config/dev-server-public` that references the new output file.
5. Restart compilation.