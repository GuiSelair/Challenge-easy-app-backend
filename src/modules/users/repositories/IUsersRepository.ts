import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/entities/User";

export default interface IUsersRepository {
  findByEmail(email: string): Promise<User | undefined>;
  create(arg: ICreateUserDTO): Promise<User>;
}