/**
 * @author <dkkiooko>
 * @returns sum of student ids
*/
export default function getStudentIdsSum(students) {
  return students.reduce((agg, student) => agg + student.id, 0);
}
