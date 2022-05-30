import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Gender, LoginMethod } from '@prisma/client';

@ObjectType()
export class UserEntity {
  @Field(() => Int)
  id: number;

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

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

registerEnumType(LoginMethod, {
  name: 'LoginMethod',
});

registerEnumType(Gender, {
  name: 'Gender',
});
