import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = EmployeeDefinition & Document;

@Schema({
  collection: 'employees',
  timestamps: true,
  toObject: {
    transform(_, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
  toJSON: {
    transform(_, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class EmployeeDefinition {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  salary: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeDefinition);
