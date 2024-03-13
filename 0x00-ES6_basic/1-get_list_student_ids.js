/**
 * @author <dkkiooko>
 * @returns array of ids from a list of object
 * @param { array[
 * id: Number,
 * firstName: String,
 * location: string]}
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
