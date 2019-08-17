
export type PatternMatcher<R> = (...patterns:any[]) => R

export type PatternMatches<R> = (...matchers:Array<PatternMatcher<R>>) => R

export function matches<Source = any, Result = any>(...source:Array<Source>): PatternMatches<Result>
