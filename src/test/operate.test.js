import operate from '../logic/operate'

describe("test operate functionality", () => {
  test("multiply btn", () => {
    const one = "4"
    const two = "3"
    const operation = "x"
    expect(operate(one,two,operation)).toBe('12')
  })
  test("increament btn", () => {
    const one = "4"
    const two = "3"
    const operation = "+"
    expect(operate(one,two,operation)).toBe('7')
  })
  test("decrement btn", () => {
    const one = "4"
    const two = "3"
    const operation = "-"
    expect(operate(one,two,operation)).toBe('1')
  })
  test("division btn", () => {
    const one = "12"
    const two = "4"
    const operation = "÷"
    expect(operate(one,two,operation)).toBe('3')
  })
  test("% btn", () => {
    const one = "3"
    const two = "2"
    const operation = "%"
    expect(operate(one,two,operation)).toBe('1')
  })
})