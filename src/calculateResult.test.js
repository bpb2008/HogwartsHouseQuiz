import { calculateResult } from "./calculateResult";

describe("calculateResult", () => {
  it("returns Gryffindor when 1 is the highest count", () => {
    const arr = [1, 4, 1];
    const house = calculateResult(arr);
    expect(house).toBe("Gryffindor");
  });

  it("returns Ravenclaw when 2 is the highest count", () => {
    const arr = [2, 2, 1];
    const house = calculateResult(arr);
    expect(house).toBe("Ravenclaw");

    const mockedFunction = vi.fn();
  });
});
