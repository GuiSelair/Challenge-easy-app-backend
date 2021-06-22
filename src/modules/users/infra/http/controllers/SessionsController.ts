import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import { Request, Response, NextFunction } from 'express';
import { container } from 'tsyringe';

class SessionsController {

  public async create(request: Request, response: Response, _:NextFunction): Promise<Response> {
    const { email, password } = request.body;

    const authenticatedUserService = container.resolve(AuthenticateUserService);
    const userAuth = await authenticatedUserService.execute({
      email,
      password
    });
    return response.json(userAuth);
  }
}

export default SessionsController;