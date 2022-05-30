import { CreateUserRequestDto } from './dtos/create-user-request.dto';
import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getAllUsers(): Promise<User[]> {
    return (await this.databaseService.user.findMany()) || [];
  }

  async createUser(createUserRequestDto: CreateUserRequestDto): Promise<User> {
    return this.databaseService.user.create({
      data: { ...createUserRequestDto },
    });
  }
}
