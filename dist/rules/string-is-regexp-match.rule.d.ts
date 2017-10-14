import { CompositeRule } from 'angular-rules-engine/rules/index';
export declare class StringIsRegExpMatchRule extends CompositeRule {
    private target;
    private expression;
    constructor(name: string, message: string, target: string, expression: RegExp, isDisplayable: boolean);
    configureRules(): void;
}
