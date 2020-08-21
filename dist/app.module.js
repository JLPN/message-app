"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mensajes_controller_1 = require("./mensajes/mensajes.controller");
const typeorm_1 = require("@nestjs/typeorm");
const mensajes_service_1 = require("./mensajes/mensajes.service");
const mensaje_entity_1 = require("./mensajes/entities/mensaje.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'nest',
                password: 'app',
                database: 'sendmeapp_db',
                entities: ["dist/**/*.entity{.ts,.js}"],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([mensaje_entity_1.Mensaje]),
        ],
        controllers: [app_controller_1.AppController, mensajes_controller_1.MensajesController],
        providers: [app_service_1.AppService, mensajes_service_1.MensajesService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map