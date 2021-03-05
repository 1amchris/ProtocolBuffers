const fs = require('fs')

const employees = []

employees.push({
    name: 'Chris',
    salary: 1000,
    id: 1001,
});

employees.push({
    name: 'Alex',
    salary: 9000,
    id: 1002,
});

employees.push({
    name: 'Josh',
    salary: 3000,
    id: 1003,
});

console.log(JSON.stringify(employees));
fs.writeFileSync('employees.json', JSON.stringify(employees));
