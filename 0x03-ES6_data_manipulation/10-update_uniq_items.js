/**
 * @returns updated map for all items with qty 1
 * @args map
 * where qty is 1, update qty to 100
 * if argument isn't map, throw error
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
