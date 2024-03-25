import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  console.log("hellop");
  res.send("getting things ready.");
});

export default app;
