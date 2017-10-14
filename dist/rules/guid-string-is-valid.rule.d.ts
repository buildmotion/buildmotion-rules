import { CompositeRule } from 'angular-rules-engine/rules/index';
export declare class GuidStringIsValidRule extends CompositeRule {
    private target;
    constructor(name: string, message: string, target: string, isDisplayable: boolean);
    configureRules(): void;
}
