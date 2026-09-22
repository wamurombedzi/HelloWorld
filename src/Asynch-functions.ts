//It fetches user profile from the remote server

console.log(1);
// Logs a message after a second
setTimeout(() => {
    console.log('waited 1 sec')
}, 1000);

console.log(2)

function getEmployeeData() {
    const employeeData = {
        name: 'Wadza',
        position: 'Software Engineer',
        age: 30,
        tasks: ['Write code', 'Drink coffee', 'Write programming cliches']
    }
    return Promise.resolve(employeeData)
}

let employeeData: any;
getEmployeeData().then(data => {
    employeeData = data
}).then(() => {
    console.log(employeeData)
})
