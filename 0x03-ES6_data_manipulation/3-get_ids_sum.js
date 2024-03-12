/**
 * @author <dkkiooko>
 * @returns sum of student ids
*/
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => (prevStudent.id !== undefined ? prevStudent.id : prevStudent) + curStudent.id,
      0,
    );
  }
  return 0;
}
