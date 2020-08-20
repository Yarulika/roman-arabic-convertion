import {
  isValidRomanNumerals,
  isValidRepetitions,
  isValidForSubtraction,
  calculateArabicValue
} from "./converter";

describe("Converter: isValidRomanNumerals function", () => {

  it("isValidRomanNumerals successful flow", () => {
    expect(isValidRomanNumerals("MDCLXVI")).toBe(true)
  })

  it("isValidRomanNumerals exception flow", () => {
    expect(isValidRomanNumerals("A")).toBe(false)
    expect(isValidRomanNumerals("MDA")).toBe(false)
  })
})

describe("Converter: isValidRepetitions function", () => {

  it("isValidRepetitions successful flow: three max; one max in a row", () => {
    expect(isValidRepetitions("MMM")).toBe(true)
    expect(isValidRepetitions("D")).toBe(true)
  })

  it("isValidRepetitions exception flow", () => {
    expect(isValidRepetitions("MMMM")).toBe(false)
    expect(isValidRepetitions("DD")).toBe(false)
    expect(isValidRepetitions("MDCCCC")).toBe(false)
  })

})

describe("Converter: isValidForSubtraction function", () => {

  it("isValidForSubtraction successful flow", () => {
    expect(isValidForSubtraction("IV")).toBe(true)
    expect(isValidForSubtraction("VII")).toBe(true)
    expect(isValidForSubtraction("XC")).toBe(true)
    expect(isValidForSubtraction("XXI")).toBe(true)
  })

  it("isValidForSubtraction exception flow", () => {
    expect(isValidForSubtraction("IIIX")).toBe(false)
    expect(isValidForSubtraction("IIX")).toBe(false)
    expect(isValidForSubtraction("MMMCCM")).toBe(false)
    expect(isValidForSubtraction("VX")).toBe(false)
  })

})

describe("Converter: calculateArabicValue", () => {

  it("calculateArabicValue successful flow", () => {
    expect(calculateArabicValue("M")).toEqual(1000)
    expect(calculateArabicValue("IV")).toEqual(4)
    expect(calculateArabicValue("VI")).toEqual(6)
    expect(calculateArabicValue("III")).toEqual(3)
    expect(calculateArabicValue("VIII")).toEqual(8)
    expect(calculateArabicValue("LXXIII")).toEqual(73)
    expect(calculateArabicValue("XCIX")).toEqual(99)
    expect(calculateArabicValue("MDC")).toEqual(1600)
  })

})
