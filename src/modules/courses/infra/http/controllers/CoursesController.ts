import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';

import Course from '@modules/courses/infra/typeorm/entities/Course';

class CoursesController {
  public async show(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesRepository = getRepository(Course);
    const allCourses = await coursesRepository.find({
      select: ['id_curso','descricao']
    });

    const courses = allCourses.map(course => ({
      ...course,
      id_curso: Number(course.id_curso / 1_000_000),
    }))

    return response.json(courses);
  }

  public async index(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const coursesRepository = getRepository(Course);
    const { id } = request.params;
    console.log(id);
    const transformIDToString = Number(id) * 1_000_000;
    
    const findCourse = await coursesRepository.findOne({
      where: {
        id_curso: transformIDToString,
      }
    });

    if (!findCourse) {
      return response.json({
        error: true,
        errorMessage: "Curso não encontrado"
      });
    }

    const transformIDToNumber = Number(findCourse.id_curso) / 1_000_000;

    findCourse.id_curso = transformIDToNumber;

    return response.json(findCourse);
  }

  
}

export default CoursesController;