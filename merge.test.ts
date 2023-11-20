import { merge } from "./merge";

test("merge 2 collection", () => {
  const col_1 = [0, 1, 5, 9, 11];
  const col_2 = [2, 6, 8, 9, 10];
  const expectRes = [0, 1, 2, 5, 6, 8, 9, 9, 10, 11];
  expect(merge(col_1, col_2)).toEqual(expectRes);
});
