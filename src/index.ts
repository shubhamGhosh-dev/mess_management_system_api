import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./utils/connectDB.js";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("App starting failed !!", err);
    process.exit(1);
  });
