import * as rules from 'angular-rules-engine/rules/index';
import { CompositeRule } from 'angular-rules-engine/rules/index'
import { StringIsRegExpMatchRule } from './string-is-regexp-match.rule'

export class GuidStringIsValidRule extends CompositeRule {

    constructor(
        name: string,
        message: string,
        private target: string,
        isDisplayable: boolean
    ) {
        super(name, message, isDisplayable);
        this.configureRules();
    }

    configureRules() {
        const showRuleViolations: boolean = true;
        const doNotShowRuleViolation: boolean = false;

        const guidLength = 36; // Length with hyphens.
        const guidExpression = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i; // Guid RegExp (with hypens)

        // determine if the target is a valid guid;
        this.rules.push(
            new rules.IsNotNullOrUndefined(
                'GuidStringIsNotNullOrUndefined'
                , 'The target value is null or undefined.'
                , this.target
                , doNotShowRuleViolation
            )
        );
        if (this.target) {
            this.rules.push(
                new rules.AreEqual(
                    'GuidStringLengthIsValid'
                    , 'The length of the target value is not valid.'
                    , this.target.length
                    , guidLength
                    , doNotShowRuleViolation
                )
            );
            this.rules.push(
                new StringIsRegExpMatchRule(
                    'GuidIsValid'
                    , 'The target value is not a valid guid.'
                    , this.target
                    , guidExpression
                    , doNotShowRuleViolation
                )
            );
        }
    }
}
