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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Course_1 = __importDefault(require("./Course"));
var LevelCourse = /** @class */ (function () {
    function LevelCourse() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], LevelCourse.prototype, "id_nivel", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Course_1.default; }, function (course) { return course.id_curso; }),
        typeorm_1.JoinColumn({ name: 'id_curso' }),
        __metadata("design:type", Course_1.default)
    ], LevelCourse.prototype, "course", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], LevelCourse.prototype, "id_curso", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "descricao", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "permite_matricula_automatica", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "iniciante", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "label_color", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "valor", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "status", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "nivel", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "livro", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "livro_edicao", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "livro_editora", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "proximo_nivel", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "idade_inicial", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "idade_final", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "idade_indicativa", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "ordem", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "data_nascimento_inicial", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "data_nascimento_final", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "id_label_notas", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "nivel_equivalente", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "cargahoraria", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "geracertificado", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "nivel_equivalente2", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "nivel_equivalente3", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "nivel_equivalente4", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "ano", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "semestre", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "id_label_notas2", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "range_idade_inicial", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "range_idade_final", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "reprovapornota", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "reprovaporfalta", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "dt_inc", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "dt_alt", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "usuario_inc", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "usuario_alt", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "isbn", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "font_color", void 0);
    __decorate([
        typeorm_1.Column('varchar'),
        __metadata("design:type", String)
    ], LevelCourse.prototype, "online_presencial", void 0);
    LevelCourse = __decorate([
        typeorm_1.Entity("courses_levels")
    ], LevelCourse);
    return LevelCourse;
}());
exports.default = LevelCourse;
