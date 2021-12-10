import { Employee } from '../entities/employee.entity';

export interface IEmployeeRepository {
  create(employee: Employee): Promise<Employee>;
  getAll(): Promise<Employee[]>;
  getById(id: string): Promise<Employee>;
  update(id: string, employeeUpdate: Partial<Employee>): Promise<Employee>;
  delete(id: string): Promise<void>;
}

export const EMPLOYEE_REPOSITORY = 'EmployeeRepository';
