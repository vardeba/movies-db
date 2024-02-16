import { app } from "./app";
import { AppDataSource } from "./data-source";
import "dotenv/config";

const port = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected!");
        app.listen(port, async () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
