import { Test, TestingModule } from '@nestjs/testing';
import { Employee } from '../entities/employee.entity';
import {
  EMPLOYEE_REPOSITORY,
  IEmployeeRepository,
} from '../repositories/employee.repository';
import { EmployeeService } from './employee.service';

const repositoryStub: IEmployeeRepository = {
  create: jest.fn(),
  getAll: jest.fn(),
  getById: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('EmployeeService', () => {
  let service: EmployeeService;
  let repository: IEmployeeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        { provide: EMPLOYEE_REPOSITORY, useValue: repositoryStub },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
    repository = module.get<IEmployeeRepository>(EMPLOYEE_REPOSITORY);
  });

  describe('create', () => {
    it('should return the employee as created by the repository', async () => {
      const employeeToCreate: Employee = {
        firstName: 'Joe',
        lastName: 'Doe',
        salary: 14000,
        dateOfBirth: new Date(),
      };
      const createdEmployee: Employee = {
        ...employeeToCreate,
        id: '61b52f5c93d2bc2de4a96e00',
      };

      jest.spyOn(repository, 'create').mockResolvedValue(createdEmployee);

      const obtainedEmployee = await service.create(employeeToCreate);

      expect(obtainedEmployee).toEqual(createdEmployee);
      expect(repository.create).toHaveBeenCalledWith(employeeToCreate);
    });
  });

  describe('getAll', () => {
    it('should return the employees as fetched by the repository', async () => {
      const fetchedEmployees: Employee[] = [
        {
          id: '61b52f5c93d2bc2de4a96e00',
          firstName: 'Joe',
          lastName: 'Doe',
          salary: 14000,
          dateOfBirth: new Date(),
        },
        {
          id: '61b52f5c93d2bc2de4a96e01',
          firstName: 'Jane',
          lastName: 'Doe',
          salary: 18000,
          dateOfBirth: new Date(),
        },
      ];

      jest.spyOn(repository, 'getAll').mockResolvedValue(fetchedEmployees);

      const obtainedEmployees = await service.getAll();

      expect(obtainedEmployees).toEqual(fetchedEmployees);
      expect(repository.getAll).toHaveBeenCalled();
    });
  });

  describe('getById', () => {
    it('should return the employee as fetched by the repository', async () => {
      const EMPLOYEE_ID = '61b52f5c93d2bc2de4a96e00';
      const fetchedEmployee: Employee = {
        id: EMPLOYEE_ID,
        firstName: 'Joe',
        lastName: 'Doe',
        salary: 14000,
        dateOfBirth: new Date(),
      };

      jest.spyOn(repository, 'getById').mockResolvedValue(fetchedEmployee);

      const obtainedEmployee = await service.getById(EMPLOYEE_ID);

      expect(obtainedEmployee).toEqual(fetchedEmployee);
      expect(repository.getById).toHaveBeenCalledWith(EMPLOYEE_ID);
    });
  });

  describe('update', () => {
    it('should return the employee as updated by the repository', async () => {
      const EMPLOYEE_ID = '61b52f5c93d2bc2de4a96e00';
      const originalEmployee: Employee = {
        id: EMPLOYEE_ID,
        firstName: 'Joe',
        lastName: 'Doe',
        salary: 14000,
        dateOfBirth: new Date(),
      };
      const employeeUpdate: Partial<Employee> = {
        salary: 17000,
      };
      const updatedEmployee: Employee = {
        ...originalEmployee,
        ...employeeUpdate,
      };

      jest.spyOn(repository, 'update').mockResolvedValue(updatedEmployee);

      const obtainedEmployee = await service.update(
        EMPLOYEE_ID,
        employeeUpdate,
      );

      expect(obtainedEmployee).toEqual(updatedEmployee);
      expect(repository.update).toHaveBeenCalledWith(
        EMPLOYEE_ID,
        employeeUpdate,
      );
    });
  });

  describe('delete', () => {
    it('should resolve successfully', async () => {
      const EMPLOYEE_ID = '61b52f5c93d2bc2de4a96e00';

      jest.spyOn(repository, 'delete').mockResolvedValue();

      const deletionPromise = service.delete(EMPLOYEE_ID);

      await expect(deletionPromise).resolves.not.toThrow();
      expect(repository.delete).toHaveBeenCalledWith(EMPLOYEE_ID);
    });
  });
});
