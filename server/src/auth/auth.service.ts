import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
<<<<<<< HEAD
import { TokenService } from 'src/token/token.service';
=======
import { ModuleRef } from '@nestjs/core';
>>>>>>> tercio-dev-new-refresh

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly moduleRef: ModuleRef,
    private readonly jwtService: JwtService,
    private readonly tokenService: TokenService,
  ) {}

  async login(user: User) {
<<<<<<< HEAD
    const { password: _, ...payload } = user;
    const jwtToken = this.jwtService.sign(payload);
    const data = {
      hash: jwtToken,
      username: payload.name,
      email: payload.email,
    };
    await this.tokenService.save(data);
=======
    const userService = this.moduleRef.get(UserService, { strict: false });

    const { password: _, refreshToken: __, ...payload } = user;
    const jwtToken = this.jwtService.sign(payload);
    await userService.updateUserToken(payload.email, jwtToken);
>>>>>>> tercio-dev-new-refresh
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
