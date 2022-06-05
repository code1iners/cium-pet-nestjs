import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

const envFilePath = `.env.${process.env.NODE_ENV}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    UserModule,
    DatabaseModule,
  ],
})
export class AppModule {}
