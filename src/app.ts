import express, {
  Request,
  Response,
  NextFunction,
  Application,
  ErrorRequestHandler,
} from "express";
import createHttpError from "http-errors";
import cors from "cors";
const app: Application = express();
app.use(
  (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): void => {
    express.json()(req, res, next);
  }
);

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Access-Control-Allow-Headers",
    "*",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: "*",
};

app.use(cors(options));

require("./routes/index")(app);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to Tools Management Server..");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

/**
 * Error Handler
 * @param err
 * @param req
 * @param res
 * @param next
 */
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
};

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is Listening to Port 3000");
});
