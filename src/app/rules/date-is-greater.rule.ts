import * as rules from 'angular-rules-engine/rules/index';
import { CompositeRule } from 'angular-rules-engine/rules/index'

// awesome dot-net package;
import { DateTime } from 'typescript-dotnet-commonjs/System/Time/DateTime';
import { TimeSpan } from 'typescript-dotnet-commonjs/System/Time/TimeSpan';

// use to verify that targetDate (maximum date allowed) is greater than (after) comparisonDate (date entered)

/**
 * Use to verify that the target date (maximum date allowed) is greater than (after) the comparison date (date entered).
 */
export class DateIsGreaterRule extends CompositeRule {
    convertedTargetDate: DateTime;
    convertedComparisonDate: DateTime;

    constructor(
        name: string,
        message: string,
        private targetDate: Date,
        private comparisonDate: Date,
        isDisplayable: boolean
    ) {
        super(name, message, isDisplayable);
        this.configureRules();
    }

    configureRules() {
        const showRuleViolations: boolean = true;
        const doNotShowRuleViolation: boolean = false;


        // determine if the target and comparison dates are valid objects;
        this.rules.push(
            new rules.IsNotNullOrUndefined(
                `DateIsNotNullOrUndefined`,
                `The target value is null or undefined.`,
                this.targetDate,
                doNotShowRuleViolation
            )
        );
        this.rules.push(
            new rules.IsNotNullOrUndefined(
                `DateIsNotNullOrUndefined`,
                `The target value is null or undefined.`,
                this.comparisonDate,
                doNotShowRuleViolation
            )
        );

        if (this.targetDate && this.comparisonDate) {

            this.convertedTargetDate = new DateTime(this.targetDate.getTime()).addHours(2);
            this.convertedComparisonDate = new DateTime(this.comparisonDate.getTime());
            let compareResult = this.convertedTargetDate.compareTo(this.convertedComparisonDate);
            // let compareResult = Math.random();

            this.rules.push(
                new rules.IsTrue(
                    'TargetDateIsGreaterThanComparisonDate',
                    'The target date is not greater than the comparison date.',
                    compareResult >= 0,
                    doNotShowRuleViolation
                )
            );
        }

    }

}