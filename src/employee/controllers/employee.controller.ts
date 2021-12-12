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

@Controller('v1/employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(new Employee(createEmployeeDto));
  }

  @Get()
  findAll() {
    return this.employeeService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.employeeService.getById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(id, new Employee(updateEmployeeDto));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.delete(id);
  }
}
