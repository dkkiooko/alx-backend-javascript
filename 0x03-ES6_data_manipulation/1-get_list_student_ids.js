/**
 * @author <dkkiooko>
 * @returns array of ids from a list of object
 * @param { array[
 * id: Number,
 * firstName: String,
 * location: string]}
 */
export default function getListStudentIds(arr) {
  let newArr = [];
  if (arr instanceof Array) {
    newArr = arr.map((item) => item.id);
  }

  return newArr;
}
