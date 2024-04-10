export const HOUSES = {
  1: "Gryffindor",
  2: "Ravenclaw",
  3: "Slytherin",
  4: "Hufflepuff",
};

export const calculateResult = (results) => {
  const numOfInstances = results.reduce((accumulated, nextArrayElement) => {
    if (nextArrayElement in accumulated) {
      accumulated[nextArrayElement]++;
      return accumulated;
    }

    return {
      ...accumulated,
      [nextArrayElement]: 1,
    };
  }, {});

  let arrHighestCount = 0;

  Object.entries(numOfInstances).forEach((nextKeyValuePair, index) => {
    if (index === 0) {
      arrHighestCount = nextKeyValuePair[0];
    } else if (nextKeyValuePair[1] > numOfInstances[arrHighestCount]) {
      arrHighestCount = nextKeyValuePair[0];
    }
  });

  return arrHighestCount;
};
