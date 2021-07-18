import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';
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

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
