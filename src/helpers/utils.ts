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
  },
  getLength: (arr) => {
    return arr.length;
  },
  getPercent: (val) => {
    return val / 5 * 100;
  },
  getDistanceBetweenCoords: (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const deg2rad = (deg) => deg * (Math.PI / 180);
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d;
  },
  getPlaces: (selectedCity, data) => {
    return data.filter((it) => it.city === selectedCity);
  }
};
