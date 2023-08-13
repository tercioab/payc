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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = exports.UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        const data = Object.assign(Object.assign({}, createUserDto), { password: await bcrypt.hash(createUserDto.password, 10) });
        const createdUser = await this.prisma.user.create({ data });
        return Object.assign(Object.assign({}, createdUser), { password: undefined });
    }
    async update(updateUserDto, id) {
        if (updateUserDto.password) {
            const userUpdate = Object.assign(Object.assign({}, updateUserDto), { password: await bcrypt.hash(updateUserDto.password, 10) });
            const updateUser = await this.prisma.user.update({
                where: { id },
                data: Object.assign({}, userUpdate),
            });
            return Object.assign(Object.assign({}, updateUser), { password: undefined });
        }
        const updateUser = await this.prisma.user.update({
            where: { id },
            data: Object.assign({}, updateUserDto),
        });
        return Object.assign(Object.assign({}, updateUser), { password: undefined });
    }
    async delete(id) {
        await this.prisma.user.delete({ where: { id } });
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({ where: { email } });
    }
    async findByCpf(cpf) {
        const userByCpf = await this.prisma.user.findUnique({ where: { cpf } });
        return Object.assign(Object.assign({}, userByCpf), { password: undefined });
    }
    async checkIfEmailOrCPFExists(email, cpf) {
        const existingUser = await this.prisma.user.findFirst({
            where: {
                OR: [{ email }, { cpf }],
            },
        });
        if (existingUser) {
            if (existingUser.email === email) {
                throw new common_1.HttpException('Email already in use', common_1.HttpStatus.CONFLICT);
            }
            if (existingUser.cpf === cpf) {
                throw new common_1.HttpException('CPF already in use', common_1.HttpStatus.CONFLICT);
            }
        }
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map