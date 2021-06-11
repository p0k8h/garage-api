import express from "express";
import cors from "cors";
import chalk from "chalk";

// import mySqlConfig from "./config/mysql";
import routes from "./routes";

const env = process.env.NODE_ENV || "dev";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use("/public", express.static(__dirname + '/public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

routes(app);

app.get("/", (req, res, next) => {
  return res.send("Hello from API")
})

app.listen(PORT, () => {
  console.log(
    `%s  Serving API at http://localhost:%d in %s mode\n`,
    chalk.green("✅"),
    PORT,
    env
  );
  console.log("PRESS CTRL+C to stop\n");
});
