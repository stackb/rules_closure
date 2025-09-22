goog.module("example.main");

const ExampleApp = goog.require("example.App");

/**
 * Main entry point for the browser application.
 */
goog.exportSymbol('example.main', function () {
    const app = new ExampleApp();
    app.render(document.body);
});

