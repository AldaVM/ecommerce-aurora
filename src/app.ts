import compression from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import config from "./config";
import {
  handleErrorGeneric,
  handleNotFoundRoute,
} from "./middlewares/errorRoutes.middleware";
import routes from "./routes";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3502);
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");

//Settings environment development:
if (config.appSettings.env != "production") {
  app.use(
    morgan(":method :url :status :res[content-length] -:response-time ms")
  );
} else {
  app.use(morgan("short"));
}

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

// app.get(
//   "/createAccount",
//   handleErrorRoutes(async (req: Request, res: Response) => {
//     try {
//       const accountInput = {
//         username: "aileen@gmail.com",
//         userpassword: "aileen123",
//         customerFirtsName: "Aileen",
//         customerLastName: "Valencia Mendoza",
//         customerFullName: "AILEEN VALENCIA MENDOZA",
//         customerDoc: "12345678",
//         customerPhone: "982752728",
//         customerAge: 28,
//         customerBirthDay: moment("2017-12-31").toDate(),
//         customerGender: gendersTypes["female"],
//         customerEmail: "aileen@gmail.com",
//         customerAddress: "Calle las violetas 125, Santa Maria, Chosica",
//       };

//       console.log(accountInput.customerGender);

//       const customerRepository = new CustomerRepository();
//       const userRepository = new UserRepository();
//       const accountEcommerceService = new AccountEcommerceService(
//         customerRepository,
//         userRepository
//       );

//       accountEcommerceService.createAccount(accountInput);
//       res.send("create");
//     } catch (error) {
//       throw error;
//     }
//   })
// );

app.use("/v1/api", routes);

app.use(handleNotFoundRoute);
app.use(handleErrorGeneric);

export default app;
