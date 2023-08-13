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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
const create_account_dto_1 = require("./dto/create-account.dto");
const update_account_dto_1 = require("./dto/update-account.dto");
const current_user_decorator_1 = require("../auth/decorators/current-user.decorator");
const user_service_1 = require("../user/user.service");
const transfer_dto_1 = require("./dto/transfer.dto");
const historic_service_1 = require("../historic/historic.service");
let AccountController = exports.AccountController = class AccountController {
    constructor(accountService, historicService, userService) {
        this.accountService = accountService;
        this.historicService = historicService;
        this.userService = userService;
    }
    create(createAccountDto, user) {
        const min = 100000;
        const max = 999999;
        const randomNumberAcount = Math.floor(Math.random() * (max - min + 1)) + min;
        createAccountDto.userId = user.id;
        createAccountDto.acount = randomNumberAcount;
        return this.accountService.create(createAccountDto);
    }
    async findOne(user) {
        const acountFinded = await this.accountService.findOne(user.id);
        if (!acountFinded) {
            throw new common_1.HttpException(`Acount of user ${user.name} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        return acountFinded;
    }
    async withdrawn(user, amount) {
        const userAccount = await this.findOne(user);
        if (userAccount.balance < amount.amount) {
            throw new common_1.HttpException('Insufficient balance for withdrawn.', common_1.HttpStatus.BAD_REQUEST);
        }
        const newBalance = userAccount.balance - amount.amount;
        return this.accountService.updateBalance(user.id, newBalance);
    }
    async deposit(user, amount) {
        const userAccount = await this.findOne(user);
        const newBalance = userAccount.balance + amount.amount;
        return this.accountService.updateBalance(user.id, newBalance);
    }
    async performTransfer(sender, transferData) {
        const destinationUser = await this.userService.findByCpf(transferData.destinationCpf);
        if (!destinationUser) {
            throw new common_1.HttpException('User not found.', common_1.HttpStatus.NOT_FOUND);
        }
        await Promise.all([
            this.withdrawn(sender, transferData),
            this.deposit(destinationUser, transferData),
        ]);
        const transferTo = {
            transferTo: destinationUser.name,
            amount: transferData.amount,
            userId: sender.id,
        };
        const receivedFrom = {
            receivedFrom: sender.name,
            amount: transferData.amount,
            userId: destinationUser.id,
        };
        await this.historicService.create(transferTo);
        await this.historicService.create(receivedFrom);
        return transferTo;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto, Object]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('withdrawn'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_account_dto_1.UpdateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "withdrawn", null);
__decorate([
    (0, common_1.Patch)('deposit'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_account_dto_1.UpdateAccountDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "deposit", null);
__decorate([
    (0, common_1.Post)('transfer'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, transfer_dto_1.TransferDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "performTransfer", null);
exports.AccountController = AccountController = __decorate([
    (0, common_1.Controller)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService,
        historic_service_1.HistoricService,
        user_service_1.UserService])
], AccountController);
//# sourceMappingURL=account.controller.js.map