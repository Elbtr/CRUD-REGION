import express from "express";
import routerRegions from "./src/routes/routerRegion";
import routerProvince from "./src/routes/routerProvince";
import routerRegencies from "./src/routes/routerRegencies";

const start = async (): Promise<void> => {
  const app = express();
  const PORT = 3000;

  try {
    app.use(express.json());
    app.use("/api/v1", routerProvince);
    app.use("/api/v1", routerRegencies);
    app.use("/api/v1", routerRegions);

    app.listen(PORT, () => console.log("running server in port " + PORT));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

void start();
