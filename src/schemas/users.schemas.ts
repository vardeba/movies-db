import { z } from "zod";

const userSchema = z.object({
    id: z.string(),
    name: z.string().max(100),
    email: z.string().email().max(120),
    password: z.string().min(4).max(20),
});

const userSchemaRequest = userSchema.omit({
    id: true,
});

const userSchemaResponse = userSchema.omit({
    password: true,
});

export { userSchema, userSchemaRequest, userSchemaResponse };
