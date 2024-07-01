const HOUSES = {
  1: "Gryffindor",
  2: "Ravenclaw",
  3: "Slytherin",
  4: "Hufflepuff",
};

export const calculateResult = (results) => {
  const numOfInstances = results.reduce((accumulated, nextArrayElement) => {
    if (nextArrayElement in accumulated) {
      accumulated[nextArrayElement]++;
    } else {
      accumulated[nextArrayElement] = 1;
    }
    return accumulated;
  }, {});

  const arrHighestCount = Object.entries(numOfInstances).reduce(
    (highest, nextKeyValuePair) => {
      const [key, value] = nextKeyValuePair;
      if (value > highest[1]) {
        return nextKeyValuePair;
      }
      return highest;
    },
    [null, 0]
  )[0];

  return HOUSES[arrHighestCount];
};
