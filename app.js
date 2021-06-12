import express from "express";
import cors from "cors";

// import mySqlConfig from "./config/mysql";
import routes from "./routes";

const env = process.env.NODE_ENV || "dev";
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use("/public", express.static(__dirname + '/public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

routes(app);

app.get("/", (req, res, next) => {
  return res.send("Hello from API");
});

app.listen(PORT, () => {
  console.log(
    `Serving API at http://localhost:%s\n`,
    PORT);
  console.log("PRESS CTRL+C to stop\n");
});
