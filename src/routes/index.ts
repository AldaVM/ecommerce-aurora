import { Router } from "express";

import {
  getError,
  getHelpPage,
  getMainPage,
} from "../controllers/main.controller";

const routes: Router = Router();

routes.route("/").get(getMainPage);
routes.route("/errors").get(getError);
routes.route("/help").get(getHelpPage);

export default routes;
