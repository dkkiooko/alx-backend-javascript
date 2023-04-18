export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    /* eslint-disable */
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
