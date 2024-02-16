import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";

// import "reflect-metadata";

const DataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");

    const migrationsPath: string = path.join(
        __dirname,
        "./migrations/**.{ts,js}"
    );

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) {
        throw new Error("Env var DATABASE_URL does not exists");
    }

    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    return {
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiesPath],
    };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
