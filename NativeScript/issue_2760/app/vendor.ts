// Snapshot the ~/app.css and the theme
const application = require("application");
require("ui/styling/style-scope");
const appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);

global.registerModule("nativescript-drawingpad", ()=> require('../node_modules/nativescript-drawingpad'))

application.loadAppCss();

require("./vendor-platform");

require("bundle-entry-points");
