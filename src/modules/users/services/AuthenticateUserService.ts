import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IErrorsDTO from '@shared/errors/IErrorsDTO';

interface IRequestDTO {
  email: string;
  password: string;
}

interface IResponseDTO {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  private usersRepository: IUsersRepository;

  constructor(
    @inject('UsersRepository')
    usersRepository: IUsersRepository,
  ) {
    this.usersRepository = usersRepository;
  }

  public async execute({
    email,
    password,
  }: IRequestDTO): Promise<IResponseDTO | IErrorsDTO> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return {
        error: true,
        errorMessage: "Senha ou email incorretos"
      }
    }

    const passwordMatched = await compare(
      password,
      user.password,
    );

    if (!passwordMatched) {
      return {
        error: true,
        errorMessage: "Senha ou email incorretos"
      }
    }
    
    const token = sign({}, "secredo", {
      subject: String(user.id),
      expiresIn: '1d'
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;