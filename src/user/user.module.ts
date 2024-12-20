import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './internal/domain/User';
import UserService from './api/service/UserService';
import UserServiceImpl from './internal/application/UserServiceImpl';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AuthModule],
  providers: [
    {
      provide: UserService,
      useClass: UserServiceImpl,
    },
  ],
  exports: [UserService, AuthModule],
})
export class UserModule {}
