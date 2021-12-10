import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    EmployeeModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-template', {
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
