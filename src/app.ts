import express, { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
const app: Express = express();

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  console.log("hellop");
  res.send("getting things ready.");
});

export default app;
