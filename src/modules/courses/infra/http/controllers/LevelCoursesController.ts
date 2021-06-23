import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import LevelCourse from '@modules/courses/infra/typeorm/entities/LevelCourse';

class CoursesController {
  public async show(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesLevelRepository = getRepository(LevelCourse);
    const allCourses = await coursesLevelRepository.find({
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
    });

    const courses = allCourses.map(course => ({
      ...course,
      id_curso: Number(course.id_curso / 1_000_000),
      id_nivel: Number(course.id_nivel / 1_000_000),
    }))

    return response.json(courses);
  }

  public async index(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesLevelRepository = getRepository(LevelCourse);
    const { id } = request.params;
    const transformIDToString = Number(id) * 1_000_000;
    
    const findCourse = await coursesLevelRepository.findOne({
      where: {
        id_nivel: transformIDToString,
      }
    });

    if (!findCourse) {
      return response.json({
        error: true,
        errorMessage: "Curso não encontrado"
      });
    }

    findCourse.id_nivel = Number(findCourse.id_nivel) / 1_000_000;
    findCourse.id_curso = Number(findCourse.id_curso) / 1_000_000;

    return response.json(findCourse);
  }
  
  public async create(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesLevelRepository = getRepository(LevelCourse);
    const { id } = request.params;
    const { 
      descricao,
      ordem,
      livroNome,
      livroEditora,
      livroEdicao,
      livroIsbn,
      ativo,
      geraCertificado,
      cargaHoraria,
      iniciante,
      idadeInicial,
      idadeFinal,
      faltaReprova,
      notaReprova,
      modalidade,
      fontColor,
      backgroundColor,
      proximoNivel,
      nivelEquivalente01,
      nivelEquivalente02,
      nivelEquivalente03,
      nivelEquivalente04,
     } = request.body;

    const transformIDToString = Number(id) * 1_000_000;

    const IDNivelLastRow = await coursesLevelRepository.findOne({
      select: ['id_nivel'],
      order: {
        id_nivel: 'DESC',
      }
    });

    if (!IDNivelLastRow?.id_nivel || id === undefined){
      return response.json({
        error: true,
        errorMessage: "Não foi possivel adicionar o nome elemento"
      })
    }

    const nextID = Number(IDNivelLastRow.id_nivel) + 1_000_000;

    const newLevel = coursesLevelRepository.create({
      id_nivel: nextID,
      id_curso: transformIDToString,
      descricao,
      ordem,
      livro: livroNome,
      livro_edicao: livroEdicao,
      livro_editora: livroEditora,
      isbn: livroIsbn,
      status: ativo,
      geracertificado: geraCertificado,
      cargahoraria: cargaHoraria,
      iniciante,
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

    await coursesLevelRepository.save(newLevel);

    newLevel.id_nivel = Number(newLevel.id_nivel) / 1_000_000;
    newLevel.id_curso = Number(newLevel.id_curso) / 1_000_000;

    return response.json(newLevel);

  }

  public async update(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesLevelRepository = getRepository(LevelCourse);
    const { idLevel } = request.params;
    const { 
      id_curso,
      descricao,
      ordem,
      livroNome,
      livroEditora,
      livroEdicao,
      livroIsbn,
      ativo,
      geraCertificado,
      cargaHoraria,
      iniciante,
      idadeInicial,
      idadeFinal,
      faltaReprova,
      notaReprova,
      modalidade,
      fontColor,
      backgroundColor,
      proximoNivel,
      nivelEquivalente01,
      nivelEquivalente02,
      nivelEquivalente03,
      nivelEquivalente04,
     } = request.body;


    
    const levelExist = await coursesLevelRepository.findOne({
      where: {
        id_nivel: Number(idLevel) * 1_000_000,
      }
    });

    if (!levelExist){
      return response.json({
        error: true,
        errorMessage: "Nível do curso não encontrado"
      })
    }

    const newLevel = coursesLevelRepository.create({
      id_nivel: levelExist.id_nivel,
      id_curso: levelExist.id_curso,
      descricao,
      ordem,
      livro: livroNome,
      livro_edicao: livroEdicao,
      livro_editora: livroEditora,
      isbn: livroIsbn,
      status: ativo,
      geracertificado: geraCertificado,
      cargahoraria: cargaHoraria,
      iniciante,
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

    await coursesLevelRepository.save(newLevel);

    newLevel.id_nivel = Number(newLevel.id_nivel) / 1_000_000;
    newLevel.id_curso = Number(newLevel.id_curso) / 1_000_000;

    return response.json(newLevel);

  }

  public async delete(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesLevelRepository = getRepository(LevelCourse);
    const { idLevel } = request.params;

    const levelExist = await coursesLevelRepository.findOne({
      where: {
        id_nivel: Number(idLevel) * 1_000_000,
      }
    });

    if (!levelExist){
      return response.json({
        error: true,
        errorMessage: "Nível do curso não encontrado"
      })
    }

    await coursesLevelRepository.delete({
      id_nivel: levelExist.id_nivel,
    });

    return response.json({
      error: false,
    })
  }

  public async listByIDCurso(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesLevelRepository = getRepository(LevelCourse);
    const { id_curso } = request.body;
    
    const transformIDToString = id_curso === "0" ? 0 : Number(id_curso * 1_000_000)

    const allCourses = await coursesLevelRepository.find({
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
      ],
      where: {
        id_curso: transformIDToString,
      }
    });

    const courses = allCourses.map(course => ({
      ...course,
      id_curso: Number(course.id_curso / 1_000_000),
      id_nivel: Number(course.id_nivel / 1_000_000),
    }))

    return response.json(courses);
  }
}

export default CoursesController;