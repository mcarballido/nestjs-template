export class Employee {
  public id: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public salary: number;

  constructor(params: Partial<Employee>) {
    Object.assign(this, params);
  }
}
