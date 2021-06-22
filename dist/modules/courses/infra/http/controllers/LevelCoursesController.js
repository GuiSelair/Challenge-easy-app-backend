"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var LevelCourse_1 = __importDefault(require("../../../../courses/infra/typeorm/entities/LevelCourse"));
var CoursesController = /** @class */ (function () {
    function CoursesController() {
    }
    CoursesController.prototype.show = function (request, response, _) {
        return __awaiter(this, void 0, void 0, function () {
            var coursesLevelRepository, allCourses, courses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coursesLevelRepository = typeorm_1.getRepository(LevelCourse_1.default);
                        return [4 /*yield*/, coursesLevelRepository.find({
                                select: [
                                    "status",
                                    "id_curso",
                                    "id_nivel",
                                    "descricao",
                                    "proximo_nivel",
                                    "nivel_equivalente",
                                    "nivel_equivalente2",
                                    "nivel_equivalente3",
                                    "nivel_equivalente4"
                                ]
                            })];
                    case 1:
                        allCourses = _a.sent();
                        courses = allCourses.map(function (course) { return (__assign(__assign({}, course), { id_curso: Number(course.id_curso / 1000000), id_nivel: Number(course.id_nivel / 1000000) })); });
                        return [2 /*return*/, response.json(courses)];
                }
            });
        });
    };
    CoursesController.prototype.index = function (request, response, _) {
        return __awaiter(this, void 0, void 0, function () {
            var coursesLevelRepository, id, transformIDToString, findCourse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coursesLevelRepository = typeorm_1.getRepository(LevelCourse_1.default);
                        id = request.params.id;
                        transformIDToString = Number(id) * 1000000;
                        return [4 /*yield*/, coursesLevelRepository.findOne({
                                where: {
                                    id_nivel: transformIDToString,
                                }
                            })];
                    case 1:
                        findCourse = _a.sent();
                        if (!findCourse) {
                            return [2 /*return*/, response.json({
                                    error: true,
                                    errorMessage: "Curso não encontrado"
                                })];
                        }
                        findCourse.id_nivel = Number(findCourse.id_nivel) / 1000000;
                        findCourse.id_curso = Number(findCourse.id_curso) / 1000000;
                        return [2 /*return*/, response.json(findCourse)];
                }
            });
        });
    };
    CoursesController.prototype.create = function (request, response, _) {
        return __awaiter(this, void 0, void 0, function () {
            var coursesLevelRepository, id, _a, descricao, ordem, livroNome, livroEditora, livroEdicao, livroIsbn, ativo, geraCertificado, cargaHoraria, iniciante, idadeInicial, idadeFinal, faltaReprova, notaReprova, modalidade, fontColor, backgroundColor, proximoNivel, nivelEquivalente01, nivelEquivalente02, nivelEquivalente03, nivelEquivalente04, transformIDToString, IDNivelLastRow, nextID, newLevel;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        coursesLevelRepository = typeorm_1.getRepository(LevelCourse_1.default);
                        id = request.params.id;
                        _a = request.body, descricao = _a.descricao, ordem = _a.ordem, livroNome = _a.livroNome, livroEditora = _a.livroEditora, livroEdicao = _a.livroEdicao, livroIsbn = _a.livroIsbn, ativo = _a.ativo, geraCertificado = _a.geraCertificado, cargaHoraria = _a.cargaHoraria, iniciante = _a.iniciante, idadeInicial = _a.idadeInicial, idadeFinal = _a.idadeFinal, faltaReprova = _a.faltaReprova, notaReprova = _a.notaReprova, modalidade = _a.modalidade, fontColor = _a.fontColor, backgroundColor = _a.backgroundColor, proximoNivel = _a.proximoNivel, nivelEquivalente01 = _a.nivelEquivalente01, nivelEquivalente02 = _a.nivelEquivalente02, nivelEquivalente03 = _a.nivelEquivalente03, nivelEquivalente04 = _a.nivelEquivalente04;
                        transformIDToString = Number(id) * 1000000;
                        return [4 /*yield*/, coursesLevelRepository.findOne({
                                select: ['id_nivel'],
                                order: {
                                    id_nivel: 'DESC',
                                }
                            })];
                    case 1:
                        IDNivelLastRow = _b.sent();
                        if (!(IDNivelLastRow === null || IDNivelLastRow === void 0 ? void 0 : IDNivelLastRow.id_nivel) || id === undefined) {
                            return [2 /*return*/, response.json({
                                    error: true,
                                    errorMessage: "Não foi possivel adicionar o nome elemento"
                                })];
                        }
                        nextID = Number(IDNivelLastRow.id_nivel) + 1000000;
                        newLevel = coursesLevelRepository.create({
                            id_nivel: nextID,
                            id_curso: transformIDToString,
                            descricao: descricao,
                            ordem: ordem,
                            livro: livroNome,
                            livro_edicao: livroEdicao,
                            livro_editora: livroEditora,
                            isbn: livroIsbn,
                            status: ativo,
                            geracertificado: geraCertificado,
                            cargahoraria: cargaHoraria,
                            iniciante: iniciante,
                            idade_final: idadeFinal,
                            idade_inicial: idadeInicial,
                            reprovaporfalta: faltaReprova,
                            reprovapornota: notaReprova,
                            online_presencial: modalidade,
                            font_color: fontColor,
                            label_color: backgroundColor,
                            proximo_nivel: proximoNivel,
                            nivel_equivalente: nivelEquivalente01,
                            nivel_equivalente2: nivelEquivalente02,
                            nivel_equivalente3: nivelEquivalente03,
                            nivel_equivalente4: nivelEquivalente04,
                        });
                        return [4 /*yield*/, coursesLevelRepository.save(newLevel)];
                    case 2:
                        _b.sent();
                        newLevel.id_nivel = Number(newLevel.id_nivel) / 1000000;
                        newLevel.id_curso = Number(newLevel.id_curso) / 1000000;
                        return [2 /*return*/, response.json(newLevel)];
                }
            });
        });
    };
    CoursesController.prototype.update = function (request, response, _) {
        return __awaiter(this, void 0, void 0, function () {
            var coursesLevelRepository, idLevel, _a, id_curso, descricao, ordem, livroNome, livroEditora, livroEdicao, livroIsbn, ativo, geraCertificado, cargaHoraria, iniciante, idadeInicial, idadeFinal, faltaReprova, notaReprova, modalidade, fontColor, backgroundColor, proximoNivel, nivelEquivalente01, nivelEquivalente02, nivelEquivalente03, nivelEquivalente04, levelExist, newLevel;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        coursesLevelRepository = typeorm_1.getRepository(LevelCourse_1.default);
                        idLevel = request.params.idLevel;
                        _a = request.body, id_curso = _a.id_curso, descricao = _a.descricao, ordem = _a.ordem, livroNome = _a.livroNome, livroEditora = _a.livroEditora, livroEdicao = _a.livroEdicao, livroIsbn = _a.livroIsbn, ativo = _a.ativo, geraCertificado = _a.geraCertificado, cargaHoraria = _a.cargaHoraria, iniciante = _a.iniciante, idadeInicial = _a.idadeInicial, idadeFinal = _a.idadeFinal, faltaReprova = _a.faltaReprova, notaReprova = _a.notaReprova, modalidade = _a.modalidade, fontColor = _a.fontColor, backgroundColor = _a.backgroundColor, proximoNivel = _a.proximoNivel, nivelEquivalente01 = _a.nivelEquivalente01, nivelEquivalente02 = _a.nivelEquivalente02, nivelEquivalente03 = _a.nivelEquivalente03, nivelEquivalente04 = _a.nivelEquivalente04;
                        return [4 /*yield*/, coursesLevelRepository.findOne({
                                where: {
                                    id_nivel: Number(idLevel) * 1000000,
                                }
                            })];
                    case 1:
                        levelExist = _b.sent();
                        if (!levelExist) {
                            return [2 /*return*/, response.json({
                                    error: true,
                                    errorMessage: "Nível do curso não encontrado"
                                })];
                        }
                        newLevel = coursesLevelRepository.create({
                            id_nivel: levelExist.id_nivel,
                            id_curso: levelExist.id_curso,
                            descricao: descricao,
                            ordem: ordem,
                            livro: livroNome,
                            livro_edicao: livroEdicao,
                            livro_editora: livroEditora,
                            isbn: livroIsbn,
                            status: ativo,
                            geracertificado: geraCertificado,
                            cargahoraria: cargaHoraria,
                            iniciante: iniciante,
                            idade_final: idadeFinal,
                            idade_inicial: idadeInicial,
                            reprovaporfalta: faltaReprova,
                            reprovapornota: notaReprova,
                            online_presencial: modalidade,
                            font_color: fontColor,
                            label_color: backgroundColor,
                            proximo_nivel: proximoNivel,
                            nivel_equivalente: nivelEquivalente01,
                            nivel_equivalente2: nivelEquivalente02,
                            nivel_equivalente3: nivelEquivalente03,
                            nivel_equivalente4: nivelEquivalente04,
                        });
                        return [4 /*yield*/, coursesLevelRepository.save(newLevel)];
                    case 2:
                        _b.sent();
                        newLevel.id_nivel = Number(newLevel.id_nivel) / 1000000;
                        newLevel.id_curso = Number(newLevel.id_curso) / 1000000;
                        return [2 /*return*/, response.json(newLevel)];
                }
            });
        });
    };
    CoursesController.prototype.delete = function (request, response, _) {
        return __awaiter(this, void 0, void 0, function () {
            var coursesLevelRepository, idLevel, levelExist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coursesLevelRepository = typeorm_1.getRepository(LevelCourse_1.default);
                        idLevel = request.params.idLevel;
                        return [4 /*yield*/, coursesLevelRepository.findOne({
                                where: {
                                    id_nivel: Number(idLevel) * 1000000,
                                }
                            })];
                    case 1:
                        levelExist = _a.sent();
                        if (!levelExist) {
                            return [2 /*return*/, response.json({
                                    error: true,
                                    errorMessage: "Nível do curso não encontrado"
                                })];
                        }
                        return [4 /*yield*/, coursesLevelRepository.delete({
                                id_nivel: levelExist.id_nivel,
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json({
                                error: false,
                            })];
                }
            });
        });
    };
    return CoursesController;
}());
exports.default = CoursesController;
