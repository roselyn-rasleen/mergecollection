export const merge = (
  collection_1: number[],
  collection_2: number[]
): number[] => {
  let i = 0,
    j = 0;
  let res: number[] = [];

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      res.push(collection_1[i]);
      i++;
    } else {
      res.push(collection_2[j]);
      j++;
    }
  }

  while (i < collection_1.length) {
    res.push(collection_1[i++]);
  }

  while (j < collection_2.length) {
    res.push(collection_2[j++]);
  }

  return res;
};
