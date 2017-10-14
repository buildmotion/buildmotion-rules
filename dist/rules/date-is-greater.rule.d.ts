import { CompositeRule } from 'angular-rules-engine/rules/index';
import { DateTime } from 'typescript-dotnet-commonjs/System/Time/DateTime';
/**
 * Use to verify that the target date (maximum date allowed) is greater than (after) the comparison date (date entered).
 */
export declare class DateIsGreaterRule extends CompositeRule {
    private targetDate;
    private comparisonDate;
    convertedTargetDate: DateTime;
    convertedComparisonDate: DateTime;
    constructor(name: string, message: string, targetDate: Date, comparisonDate: Date, isDisplayable: boolean);
    configureRules(): void;
}
