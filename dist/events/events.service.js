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
exports.EventsService = void 0;
const prisma_service_1 = require("./../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let EventsService = class EventsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createEventDto) {
        return this.prismaService.event.create({
            data: {
                ...createEventDto,
                date: new Date(createEventDto.date),
            },
        });
    }
    findAll() {
        return this.prismaService.event.findMany();
    }
    findOne(id) {
        return this.prismaService.event.findUnique({
            where: { id },
        });
    }
    update(id, updateEventDto) {
        return this.prismaService.event.update({
            data: updateEventDto,
            where: { id },
        });
    }
    remove(id) {
        return this.prismaService.event.delete({
            where: { id },
        });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map