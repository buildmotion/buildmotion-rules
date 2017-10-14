import * as rules from 'angular-rules-engine/rules/index';
import { CompositeRule } from 'angular-rules-engine/rules/index'

export class StringIsRegExpMatchRule extends CompositeRule {

    constructor(
        name: string,
        message: string,
        private target: string,
        private expression: RegExp,
        isDisplayable: boolean
    ) {
        super(name, message, isDisplayable);
        this.configureRules();
    }

    configureRules() {
        const showRuleViolations: boolean = true;
        const doNotShowRuleViolation: boolean = false;

        // determine if the target is a valid object;
        this.rules.push(
            new rules.IsNotNullOrUndefined(
                'StringIsNotNullOrUndefined'
                , 'The target value is null or undefined.'
                , this.target
                , doNotShowRuleViolation
            )
        );
        if (this.target) {
            this.rules.push(
                new rules.IsTrue(
                    'StringIsRegExpMatch'
                    , 'The target value is not a match.'
                    , this.expression.test(this.target)
                    , doNotShowRuleViolation
                )
            );
        }
    }
}
