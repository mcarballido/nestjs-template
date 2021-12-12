import { Inject, Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '../repositories/employee.repository';

@Injectable()
export class EmployeeService {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private employeeRepository: IEmployeeRepository,
  ) {}

  async create(employee: Employee): Promise<Employee> {
    return this.employeeRepository.create(employee);
  }

  async getAll(): Promise<Employee[]> {
    return this.employeeRepository.getAll();
  }

  async getById(id: string): Promise<Employee> {
    return this.employeeRepository.getById(id);
  }

  async update(
    id: string,
    employeeUpdate: Partial<Employee>,
  ): Promise<Employee> {
    return this.employeeRepository.update(id, employeeUpdate);
  }

  async delete(id: string): Promise<void> {
    return this.employeeRepository.delete(id);
  }
}
