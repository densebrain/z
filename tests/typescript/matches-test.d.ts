
declare module "z" {
  export type PatternMatcher = (...patterns:any[]) => any

  export type PatternMatches<Matcher extends PatternMatcher = PatternMatcher> = (...matchers:Array<Matcher>) => ReturnType<Matcher>// extends <infer R> ? R : never //((...patterns:any[]) => infer R) ? R : never

  export function matches(...source:Array<any>): PatternMatches
}
