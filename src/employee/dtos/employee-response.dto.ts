export class EmployeeResponseDto {
  id?: string;
  firstName!: string;
  lastName!: string;
  dateOfBirth!: Date;
  salary?: number;
}
