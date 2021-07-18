export class CreateEmployeeDto {
  public id: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public salary: number;

  constructor(params: CreateEmployeeDto) {
    Object.assign(this, params);
  }
}
