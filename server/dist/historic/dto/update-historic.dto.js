"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHistoricDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_historic_dto_1 = require("./create-historic.dto");
class UpdateHistoricDto extends (0, mapped_types_1.PartialType)(create_historic_dto_1.CreateHistoricDto) {
}
exports.UpdateHistoricDto = UpdateHistoricDto;
//# sourceMappingURL=update-historic.dto.js.map