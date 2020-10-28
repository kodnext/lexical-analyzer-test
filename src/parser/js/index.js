export const parseAssignmentStatement = (regex, statement) => {
  return statement.replace(regex, "$1 2$");
}