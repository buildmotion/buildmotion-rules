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
import { StringIsRegExpMatchRule } from './string-is-regexp-match.rule';
var GuidStringIsValidRule = /** @class */ (function (_super) {
    __extends(GuidStringIsValidRule, _super);
    function GuidStringIsValidRule(name, message, target, isDisplayable) {
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.target = target;
        _this.configureRules();
        return _this;
    }
    GuidStringIsValidRule.prototype.configureRules = function () {
        var showRuleViolations = true;
        var doNotShowRuleViolation = false;
        var guidLength = 36; // Length with hyphens.
        var guidExpression = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i; // Guid RegExp (with hypens)
        // determine if the target is a valid guid;
        this.rules.push(new rules.IsNotNullOrUndefined('GuidStringIsNotNullOrUndefined', 'The target value is null or undefined.', this.target, doNotShowRuleViolation));
        if (this.target) {
            this.rules.push(new rules.AreEqual('GuidStringLengthIsValid', 'The length of the target value is not valid.', this.target.length, guidLength, doNotShowRuleViolation));
            this.rules.push(new StringIsRegExpMatchRule('GuidIsValid', 'The target value is not a valid guid.', this.target, guidExpression, doNotShowRuleViolation));
        }
    };
    return GuidStringIsValidRule;
}(CompositeRule));
export { GuidStringIsValidRule };
//# sourceMappingURL=guid-string-is-valid.rule.js.map