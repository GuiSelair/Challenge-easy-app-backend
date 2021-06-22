import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IErrorsDTO from '@shared/errors/IErrorsDTO';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

@injectable()
class CreateUserService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute({ email, password }: ICreateUserDTO): Promise<User | IErrorsDTO> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      return {
        error: true,
        errorMessage: "Usuário já existente"
      };
    }

    const passwordHashed = await hash(password, 8);

    const user = await this.usersRepository.create({
      email,
      password: passwordHashed,
    });

    return user;
  }
}

export default CreateUserService;