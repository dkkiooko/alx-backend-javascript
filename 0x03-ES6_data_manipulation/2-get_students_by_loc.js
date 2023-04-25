export default function getStudentsByLocation(array, city) {
  if (array instanceof Array) {
    return array.filter((student) => student.location === city);
  }
  return [];
}
