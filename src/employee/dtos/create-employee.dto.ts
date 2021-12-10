export class CreateEmployeeDto {
  id?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  salary?: number;

  constructor(init: CreateEmployeeDto) {
    this.id = init.id;
    this.firstName = init.firstName;
    this.lastName = init.lastName;
    this.dateOfBirth = init.dateOfBirth;
    this.salary = init.salary;
  }
}
