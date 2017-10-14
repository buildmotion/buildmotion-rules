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
// awesome dot-net package;
import { DateTime } from 'typescript-dotnet-commonjs/System/Time/DateTime';
// use to verify that targetDate (maximum date allowed) is greater than (after) comparisonDate (date entered)
/**
 * Use to verify that the target date (maximum date allowed) is greater than (after) the comparison date (date entered).
 */
var DateIsGreaterRule = /** @class */ (function (_super) {
    __extends(DateIsGreaterRule, _super);
    function DateIsGreaterRule(name, message, targetDate, comparisonDate, isDisplayable) {
        var _this = _super.call(this, name, message, isDisplayable) || this;
        _this.targetDate = targetDate;
        _this.comparisonDate = comparisonDate;
        _this.configureRules();
        return _this;
    }
    DateIsGreaterRule.prototype.configureRules = function () {
        var showRuleViolations = true;
        var doNotShowRuleViolation = false;
        // determine if the target and comparison dates are valid objects;
        this.rules.push(new rules.IsNotNullOrUndefined("DateIsNotNullOrUndefined", "The target value is null or undefined.", this.targetDate, doNotShowRuleViolation));
        this.rules.push(new rules.IsNotNullOrUndefined("DateIsNotNullOrUndefined", "The target value is null or undefined.", this.comparisonDate, doNotShowRuleViolation));
        if (this.targetDate && this.comparisonDate) {
            this.convertedTargetDate = new DateTime(this.targetDate.getTime()).addHours(2);
            this.convertedComparisonDate = new DateTime(this.comparisonDate.getTime());
            var compareResult = this.convertedTargetDate.compareTo(this.convertedComparisonDate);
            // let compareResult = Math.random();
            this.rules.push(new rules.IsTrue('TargetDateIsGreaterThanComparisonDate', 'The target date is not greater than the comparison date.', compareResult >= 0, doNotShowRuleViolation));
        }
    };
    return DateIsGreaterRule;
}(CompositeRule));
export { DateIsGreaterRule };
//# sourceMappingURL=date-is-greater.rule.js.map