
describe("Validate Age", () => {
    it("should allow bike if age under 18", () => {
      const result = validateAge(17)
          // Use toStrictEqual to validate object
    })
    it("should allow to use own car if age between 19 and 100", () => {
      const edgeLeft = validateAge(19)
      const edgeRight = validateAge(99)
          // Use toStrictEqual to validate object
    })
    it("should use dads car if 18", () => {
      const result = validateAge(18)
          // Use toStrictEqual to validate object
    })
      it("should not be allowed if age more than 99", () => {
      const result = validateAge(100)
      // Use toContain - to validate allowed key
    })
  })