const Schema = require('./employees_pb');
const fs = require('fs');

const chris = new Schema.Employee();
chris.setId(1001);
chris.setName('Chris');
chris.setSalary(1001);

const alex = new Schema.Employee();
alex.setId(1002);
alex.setName('Alex');
alex.setSalary(9001);

const josh = new Schema.Employee();
josh.setId(1003);
josh.setName('Josh');
josh.setSalary(3000);

const employees = new Schema.Employees();
employees.addEmployees(chris);
employees.addEmployees(alex);
employees.addEmployees(josh);

const bytes = employees.serializeBinary();
console.log('binary ' + bytes);
fs.writeFileSync('bemployees', bytes);

console.log(Schema.Employees.deserializeBinary(bytes))

