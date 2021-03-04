"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@builder.io/react");
var pro_form_1 = __importStar(require("@ant-design/pro-form"));
var ProForm_config_1 = require("./components/ProForm.config");
var ProFormText_config_1 = require("./components/ProFormText.config");
react_1.Builder.registerComponent(react_1.withChildren(pro_form_1.default), ProForm_config_1.configProForm);
react_1.Builder.registerComponent(pro_form_1.ProFormText, ProFormText_config_1.configProFormText);
//# sourceMappingURL=builder-pro-form.js.map