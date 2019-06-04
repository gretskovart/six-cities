export default {
  getRandom: (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);

    return rand;
  },
  getUniqArr: (arr) => {
    const tempArr = {};

    arr.forEach((item) => {
      const keyName = item;

      tempArr[keyName] = true;
    });

    return Object.keys(tempArr);
  }
};
