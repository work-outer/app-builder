var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import { Grid } from '@chakra-ui/react';
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        var _a = this.props, height = _a.height, columns = _a.columns, gap = _a.gap;
        return (React.createElement(React.Fragment, null,
            React.createElement(Grid, { h: height, templateColumns: "repeat(" + columns + ", 1fr)", gap: gap })));
    };
    Layout.defaultProps = {
        column: 12,
        gap: 4,
    };
    return Layout;
}(React.Component));
export { Layout };
export default Layout;
//# sourceMappingURL=Layout.js.map