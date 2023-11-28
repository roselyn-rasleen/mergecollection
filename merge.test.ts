import { mergecol } from "./merge";

test("merge 2 collection", () => {
  const array1 = [1, 3, 5, 7, 9];
  const array2 = [2, 4, 6, 8, 10];
  const expectation = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(mergecol(array1, array2)).toEqual(expectation);
});
