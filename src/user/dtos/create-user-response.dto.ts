import { Field } from '@nestjs/graphql';
import { Gender, LoginMethod } from '@prisma/client';

export class CreateUserResponseDto {
  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  phone: string;

  @Field(() => String, { nullable: true })
  avatar: string;

  @Field(() => LoginMethod)
  loginMethod: LoginMethod;

  @Field(() => Gender, { nullable: true })
  gender: Gender;
}
