"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const local_strategy_1 = require("./strategies/local.strategy");
const user_module_1 = require("../user/user.module");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("./strategies/jwt.strategy");
const config_1 = require("@nestjs/config");
const constants_1 = require("./constants");
const token_service_1 = require("../token/token.service");
const prisma_service_1 = require("../prisma/prisma.service");
const token_module_1 = require("../token/token.module");
let AuthModule = exports.AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            user_module_1.UserModule,
            token_module_1.TokenModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            token_service_1.TokenService,
            local_strategy_1.LocalStrategy,
            jwt_strategy_1.JwtStrategy,
            prisma_service_1.PrismaService,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map