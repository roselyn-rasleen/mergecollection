export const mergecol = (
  collection_1: number[],
  collection_2: number[]
): number[] => {
  let i = 0,
    j = 0;
  let result1: number[] = [];

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      result1.push(collection_1[i]);
      i++;
    } else {
      result1.push(collection_2[j]);
      j++;
    }
  }

  while (i < collection_1.length) {
    result1.push(collection_1[i++]);
  }

  while (j < collection_2.length) {
    result1.push(collection_2[j++]);
  }

  return result1;
};
