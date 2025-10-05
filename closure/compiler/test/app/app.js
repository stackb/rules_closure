goog.module("example.App");

const ClosureJsLibrary = goog.require('proto.closure.ClosureJsLibrary');
const Component = goog.require("goog.ui.Component");
const Message = goog.require("jspb.Message");
const dom = goog.require("goog.dom");
const soy = goog.require("goog.soy");
const { app } = goog.require('soy.example.app');

/**
 * Example app component.
 */
class ExampleApp extends Component {
    /**
     * @param {?dom.DomHelper=} opt_domHelper
     */
    constructor(opt_domHelper) {
        super(opt_domHelper);
    }

    /** @override */
    createDom() {
        this.setElementInternal(soy.renderAsElement(app, {
            appName: 'Example App',
            buildInfo: this.createExampleClosureJsLibrary(),
        }));
    }

    /**
     * @returns {!ClosureJsLibrary}
     */
    createExampleClosureJsLibrary() {
        const info = new ClosureJsLibrary();
        info.setLabel('//closure/compiler/test/app:main');
        info.addModule("module-a");
        info.addModule("module-b");
        info.addModule("module-c");
        return info;
    }
}
exports = ExampleApp;
