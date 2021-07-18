export class Employee {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  salary: number;

  constructor(params: Partial<Employee>) {
    Object.assign(this, params);
  }
}
