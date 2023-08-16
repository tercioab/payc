"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../token/token.service");
let AuthService = exports.AuthService = class AuthService {
    constructor(moduleRef, jwtService, tokenService) {
        this.moduleRef = moduleRef;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
    }
    async login(user) {
        const { password: _ } = user, payload = __rest(user, ["password"]);
        const jwtToken = this.jwtService.sign(payload);
        const data = {
            hash: jwtToken,
            username: payload.name,
            email: payload.email,
        };
        await this.tokenService.save(data);
        return { token: jwtToken, user: payload };
    }
    async validateUser(email, password) {
        const userService = this.moduleRef.get(user_service_1.UserService, { strict: false });
        const user = await userService.findByEmail(email);
        if (user) {
            const isPassWordValid = await bcrypt.compare(password, user.password);
            if (isPassWordValid) {
                return Object.assign(Object.assign({}, user), { password: undefined });
            }
        }
        throw new Error('Email address or password provided is incorrect');
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof ModuleRef !== "undefined" && ModuleRef) === "function" ? _a : Object, jwt_1.JwtService,
        token_service_1.TokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map