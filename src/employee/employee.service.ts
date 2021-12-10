import { Inject, Injectable } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from './repositories/employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private employeeRepository: IEmployeeRepository,
  ) {}

  create(employee: Employee) {
    return this.employeeRepository.create(employee);
  }

  getAll() {
    return this.employeeRepository.getAll();
  }

  getById(id: string) {
    return this.employeeRepository.getById(id);
  }

  update(id: string, employeeUpdate: Partial<Employee>) {
    return this.employeeRepository.update(id, employeeUpdate);
  }

  delete(id: string) {
    return this.employeeRepository.delete(id);
  }
}
