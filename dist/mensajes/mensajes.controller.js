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
exports.MensajesController = void 0;
const common_1 = require("@nestjs/common");
const create_mensaje_dto_1 = require("./dto/create-mensaje-dto");
const mensajes_service_1 = require("./mensajes.service");
let MensajesController = class MensajesController {
    constructor(mensajesService) {
        this.mensajesService = mensajesService;
    }
    create(createMensajeDto, response) {
        this.mensajesService.createMensaje(createMensajeDto).then(mensaje => { response.status(common_1.HttpStatus.CREATED).json(mensaje); }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la creación del mensaje' });
        });
    }
    getAll(response) {
        this.mensajesService.getAll().then(mensajesList => {
            response.status(common_1.HttpStatus.OK).json(mensajesList);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la obtención del mensaje' });
        });
    }
    update(updateMensajeDto, response, idmensaje) {
        this.mensajesService.updateMensaje(idmensaje, updateMensajeDto).then(mensaje => {
            response.status(common_1.HttpStatus.OK).json(mensaje);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la actualización del mensaje' });
        });
    }
    delete(response, idmensaje) {
        this.mensajesService.deleteMensaje(idmensaje).then(res => {
            response.status(common_1.HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(common_1.HttpStatus.FORBIDDEN).json({ mensaje: 'Error en la eliminación del mensaje' });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mensaje_dto_1.CreateMensajeDto, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "getAll", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Res()), __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mensaje_dto_1.CreateMensajeDto, Object, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MensajesController.prototype, "delete", null);
MensajesController = __decorate([
    common_1.Controller('mensajes'),
    __metadata("design:paramtypes", [mensajes_service_1.MensajesService])
], MensajesController);
exports.MensajesController = MensajesController;
//# sourceMappingURL=mensajes.controller.js.map