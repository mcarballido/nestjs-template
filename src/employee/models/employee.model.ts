import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type EmployeeDocument = EmployeeDefinition & Document;

@Schema({
  collection: 'employees',
  timestamps: true,
  toJSON: {
    transform(doc, ret) {
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
