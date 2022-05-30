import { CreateUserRequestDto } from './dtos/create-user-request.dto';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers();
  }

  @Mutation(() => UserEntity)
  async createUser(@Args('user') user: CreateUserRequestDto): Promise<User> {
    return await this.userService.createUser(user);
  }
}
