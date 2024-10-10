import Home from "@Views/Home";
import { IRoute } from "./types";

const appRoutes: IRoute[] = [
  {
    path: "/",
    name: "Home ",
    component: Home,
    authenticated: false,
  },
];

export default appRoutes;
