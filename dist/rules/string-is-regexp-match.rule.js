var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as rules from 'angular-rules-engine/rules/index';
import { CompositeRule } from 'angular-rules-engine/rules/index';
var StringIsRegExpMatchRule = (function (_super) {
    __extends(StringIsRegExpMatchRule, _super);
    function StringIsRegExpMatchRule(name, message, target, expression, isDisplayable) {
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.expression = expression;
        _this.configureRules();
        return _this;
    }
    StringIsRegExpMatchRule.prototype.configureRules = function () {
        var showRuleViolations = true;
        var doNotShowRuleViolation = false;
        // determine if the target is a valid object;
        this.rules.push(new rules.IsNotNullOrUndefined('StringIsNotNullOrUndefined', 'The target value is null or undefined.', this.target, doNotShowRuleViolation));
        if (this.target) {
            this.rules.push(new rules.IsTrue('StringIsRegExpMatch', 'The target value is not a match.', this.expression.test(this.target), doNotShowRuleViolation));
        }
    };
    return StringIsRegExpMatchRule;
}(CompositeRule));
export { StringIsRegExpMatchRule };
//# sourceMappingURL=string-is-regexp-match.rule.js.map