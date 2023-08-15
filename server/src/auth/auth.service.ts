import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly moduleRef: ModuleRef,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User) {
    const userService = this.moduleRef.get(UserService, { strict: false });

    const { password: _, refreshToken: __, ...payload } = user;
    const jwtToken = this.jwtService.sign(payload);
    await userService.updateUserToken(payload.email, jwtToken);
    return { token: jwtToken, user: payload };
  }

  async validateUser(email: string, password: string) {
    const userService = this.moduleRef.get(UserService, { strict: false });
    const user = await userService.findByEmail(email);
    if (user) {
      const isPassWordValid = await bcrypt.compare(password, user.password);

      if (isPassWordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }
    throw new Error('Email address or password provided is incorrect');
  }
}
