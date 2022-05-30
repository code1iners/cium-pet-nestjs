import { Field, InputType } from '@nestjs/graphql';
import { Gender, LoginMethod } from '@prisma/client';

@InputType()
export class CreateUserRequestDto {
  @Field(() => String)
  email: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  phone: string;

  @Field(() => String, { nullable: true })
  avatar: string;

  @Field(() => LoginMethod)
  loginMethod: LoginMethod;

  @Field(() => Gender, { nullable: true })
  gender: Gender;
}
