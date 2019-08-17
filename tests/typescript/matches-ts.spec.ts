/// <reference path="./matches-test.d.ts" />

import {matches} from "z"
//import "expect"
import "chai"
import "mocha"
import expect from "expect"

//import { describe, it } from "mocha";

describe('matches-ts', () => {
  it('should match tail array with comparsion at tail argument', () => {
    const result = matches([1, 2, 3])(
      (x, xs = [1, 2]) => false,
      (x, xs = [2, 3]) => true,
      (x, xs) => false
    )

    expect(result).toBe(true)
  })

  it('should match head array with comparsion at head argument', () => {
    const result = matches([1, 2, 3])(
      (x, y = 1, xs) => false,
      (x, y = 2, xs) => true,
      (x, y, xs) => false
    )

    result.should.equal(true)
  })
})

