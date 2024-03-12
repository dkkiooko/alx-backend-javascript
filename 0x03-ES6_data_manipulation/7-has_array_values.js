/**
 * @returns boolean if all elements exist in set
 * @args set and array
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
