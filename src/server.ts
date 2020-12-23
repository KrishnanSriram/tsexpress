import express from 'express';
import bodyParser from "body-parser";
import logging from './logger';
import config from "./config";
import HealthRouter from './routes/health';
import App from "./app";
import HealthController from "./controllers/health";

// const app = express();
// const NAMESPACE = 'Server';

// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//    logging.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`, NAMESPACE);
//    next();
// });

/** Parse the body of the request */
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

/** Routes go here */
// app.use('/health', HealthRouter);
// app.get('/', (req: express.Request, res: express.Response) => {
//     res.status(200).json({message: 'Hello world'});
// })

const app = new App(
    [new HealthController()]
);
app.listen();

/** Error handling */
// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     const error = new Error('Page NOT found');
//     res.status(404).json({message: error.message});
// });

// app.listen(config.server.port, () => {
//     logging.info(NAMESPACE, `Server is running in ${config.server.hostname}: ${config.server.port}`);
// });