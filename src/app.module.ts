import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [User],
      // autoLoadEntities: true, // it will auto search for entities in the src folder
      synchronize: true, // do not use in production
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
