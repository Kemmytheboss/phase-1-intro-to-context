// Your code here
// Constants for heart icons — if needed for UI later
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// 1. Create a single employee record from an array
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  };
}

// 2. Create multiple employee records from an array of arrays
function createEmployeeRecords(arrays) {
  return arrays.map(createEmployeeRecord);
}

// 3. Add a timeIn event to the employee's record
function createTimeInEvent(employeeRecord, dateTimeString) {
  const [date, hour] = dateTimeString.split(" ");

  employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  });

  return employeeRecord;
}

// 4. Add a timeOut event to the employee's record
function createTimeOutEvent(employeeRecord, dateTimeString) {
  const [date, hour] = dateTimeString.split(" ");

  employeeRecord.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  });

  return employeeRecord;
}

// 5. Calculate hours worked on a specific date
function hoursWorkedOnDate(employeeRecord, date) {
  const timeIn = employeeRecord.timeInEvents.find(e => e.date === date);
  const timeOut = employeeRecord.timeOutEvents.find(e => e.date === date);

  return (timeOut.hour - timeIn.hour) / 100;
}

// 6. Calculate wages earned on a specific date
function wagesEarnedOnDate(employeeRecord, date) {
  const hours = hoursWorkedOnDate(employeeRecord, date);
  return hours * employeeRecord.payPerHour;
}

// 7. Calculate total wages for all dates
function allWagesFor(employeeRecord) {
  return employeeRecord.timeInEvents.reduce((total, event) => {
    return total + wagesEarnedOnDate(employeeRecord, event.date);
  }, 0);
}

// 8. Calculate total payroll for all employees
function calculatePayroll(employeeRecords) {
  return employeeRecords.reduce((total, record) => {
    return total + allWagesFor(record);
  }, 0);
}
