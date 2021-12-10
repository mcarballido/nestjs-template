import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from '../entities/employee.entity';
import { EmployeeDefinition, EmployeeDocument } from '../models/employee.model';
import { IEmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeMongoRepository implements IEmployeeRepository {
  constructor(
    @InjectModel(EmployeeDefinition.name)
    private employeeModel: Model<EmployeeDocument>,
  ) {}

  async create(employee: Employee): Promise<Employee> {
    const createdEmployee = await this.employeeModel.create(employee);

    return new Employee(createdEmployee.toObject());
  }

  async getAll(): Promise<Employee[]> {
    const employees = await this.employeeModel.find({});

    return employees.map(e => new Employee(e.toObject()));
  }

  async getById(id: string): Promise<Employee> {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new BadRequestException(
        'The provided ID is not of a valid format.',
      );
    }

    const employee = await this.employeeModel.findById(id);

    if (!employee) {
      throw new NotFoundException(
        'The employee of the provided ID does not exist.',
      );
    }

    return new Employee(employee.toObject());
  }

  async update(id: string, employeeUpdate: Employee): Promise<Employee> {
    const employee = await this.employeeModel.findByIdAndUpdate(
      id,
      { $set: employeeUpdate },
      { new: true },
    );

    if (!employee) {
      throw new NotFoundException(
        'The employee of the provided ID does not exist.',
      );
    }

    return new Employee(employee.toObject());
  }

  async delete(id: string): Promise<void> {
    await this.employeeModel.findByIdAndDelete(id);
  }
}
