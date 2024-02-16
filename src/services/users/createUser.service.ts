import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entities";
import { AppError } from "../../errors";
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { hash } from "bcryptjs";

const createUserService = async ({
    name,
    email,
    password,
}: TUserRequest): Promise<TUserResponse> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: {
            email,
        },
    });

    if (findUser) {
        throw new AppError("User already exists", 409);
    }

    const hashedPassword = await hash(password, 10);

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
    });

    await userRepository.save(user);

    return userSchemaResponse.parse(user);
};

export { createUserService };
