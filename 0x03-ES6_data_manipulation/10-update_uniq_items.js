export default function updateUniqueItems(myMap) {
  if (myMap.constructor !== Map) throw new Error('Cannot process');
  myMap.forEach((value, key) => {
    if (value === 1) {
      myMap.set(key, 100);
    }
    return [key, value];
  });
}
