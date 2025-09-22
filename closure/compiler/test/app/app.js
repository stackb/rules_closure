goog.module("example.App");

const Component = goog.require("goog.ui.Component");
const dom = goog.require("goog.dom");

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
        this.setElementInternal(
            dom.createDom(
                dom.TagName.DIV,
                goog.getCssName("app-container"),
                dom.createDom(dom.TagName.SPAN, dom.createTextNode("Hello")),
                dom.createDom(dom.TagName.B, goog.getCssName("app-emphasis"), dom.createTextNode("World")),
            ),
        );
    }
}
exports = ExampleApp;
