import { Repository, getRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '../entities/User';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor(){
    this.ormRepository = getRepository(User);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        email
      }
    });
    return user;
  }

  public async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      email,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UsersRepository;