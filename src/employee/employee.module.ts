import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeDefinition, EmployeeSchema } from './models/employee.model';
import { EmployeeMongoRepository } from './repositories/employee.mongo.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: EmployeeDefinition.name, schema: EmployeeSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeMongoRepository],
})
export class EmployeeModule {}
