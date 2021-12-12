import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { UpdateEmployeeDto } from '../dtos/update-employee.dto';
import { Employee } from '../entities/employee.entity';
import { EmployeeResponseDto } from '../dtos/employee-response.dto';

@Controller('v1/employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeResponseDto> {
    return this.employeeService.create(new Employee(createEmployeeDto));
  }

  @Get()
  async findAll(): Promise<EmployeeResponseDto[]> {
    return this.employeeService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<EmployeeResponseDto> {
    return this.employeeService.getById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeResponseDto> {
    return this.employeeService.update(id, new Employee(updateEmployeeDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.employeeService.delete(id);
  }
}
