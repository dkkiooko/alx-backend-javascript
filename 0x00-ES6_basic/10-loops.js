export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  /* eslint-disable */
  for (const idx of array) {
    newArray.push(idx + appendString);
  }

  return newArray;
}
