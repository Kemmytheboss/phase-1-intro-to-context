// Your code here
function createEmployeeRecord([firstName, familyName, title, payHour]){
    return {
        firstName: "",
        familyName: "",
        title: "",
        payHour: "",
        timeInEvents: [],
        timeOutEvents: [],}
}

function createEmployeeRecords(data){
    return data.map(createEmployeeRecord);
}

function creteTimeInEvent(employedRecord, dataTimeString){
    const [date, hour] = dateTimeString.split("");

    employedRecord.timeInEvent.push({
        type: "TimeIn",
        hour: 900,
        date: "2025-09-19"
    })
    return employedRecord;

}
