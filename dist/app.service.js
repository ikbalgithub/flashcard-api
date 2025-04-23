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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_entity_1 = require("./app.entity");
let AppService = class AppService {
    constructor(cardRepository) {
        this.cardRepository = cardRepository;
    }
    findAll(category) {
        if (category === 'today') {
            var _date = new Date();
            var year = _date.getFullYear();
            var month = _date.getMonth() + 1;
            var date = _date.getDate();
            return this.cardRepository.find({
                where: {
                    addedAt: `${year}/${month}/${date}`
                }
            });
        }
        if (category === 'yesterday') {
            var _date = new Date();
            var year = _date.getFullYear();
            var month = _date.getMonth() + 1;
            var date = _date.getDate() - 1;
            return this.cardRepository.find({
                where: {
                    addedAt: `${year}/${month}/${date}`
                }
            });
        }
        if (category === 'all') {
            return this.cardRepository.find();
        }
    }
    addOrUpdate(params) {
        var newCard = new app_entity_1.Card();
        Object.keys(params).map(key => {
            newCard[key] = params[key];
        });
        this.cardRepository.save(newCard);
    }
    remove(id) {
        this.cardRepository.delete(id);
    }
    findByCriteria(c) {
        return this.cardRepository
            .createQueryBuilder('card')
            .where('card.romaji REGEXP :c', { c: `^${c}` })
            .getMany();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(app_entity_1.Card)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppService);
//# sourceMappingURL=app.service.js.map