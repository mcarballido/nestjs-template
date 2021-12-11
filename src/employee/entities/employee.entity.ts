export class Employee {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  salary?: number;

  constructor(init: {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string | number;
    salary?: number;
  }) {
    this.id = init.id;
    this.firstName = init.firstName;
    this.lastName = init.lastName;
    this.dateOfBirth = new Date(init.dateOfBirth);
    this.salary = init.salary;
  }
}
