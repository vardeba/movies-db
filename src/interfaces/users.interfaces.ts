import { z } from "zod";
import {
    userSchema,
    userSchemaRequest,
    userSchemaResponse,
} from "../schemas/users.schemas";

type TUserRequest = z.infer<typeof userSchemaRequest>;

type TUser = z.infer<typeof userSchema>;

type TUserResponse = z.infer<typeof userSchemaResponse>;

export { TUser, TUserRequest, TUserResponse };
