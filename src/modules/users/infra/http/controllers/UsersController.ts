import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';

class UsersController {
  
  public async create(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const { email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      email,
      password,
    })

    return response.json({
      user
    });
  }
}

export default UsersController;