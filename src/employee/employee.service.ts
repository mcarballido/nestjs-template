import { Injectable } from '@nestjs/common';
import { Employee } from './entities/employee.entity';
import { EmployeeMongoRepository } from './repositories/employee.mongo.repository';

@Injectable()
export class EmployeeService {
  constructor(private employeeRepository: EmployeeMongoRepository) {}

  create(employee: Employee) {
    return this.employeeRepository.create(employee);
  }

  getAll() {
    return this.employeeRepository.getAll();
  }

  getById(id: string) {
    return this.employeeRepository.getById(id);
  }

  update(id: string, updatedEmployee: Employee) {
    return this.employeeRepository.update(id, updatedEmployee);
  }

  delete(id: string) {
    return this.employeeRepository.delete(id);
  }
}
