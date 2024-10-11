import Home from "@Views/Home";
import Notes from "@Components/Notes";
import { IRoute } from "./types";

const appRoutes: IRoute[] = [
  {
    path: "/",
    name: "Home ",
    component: Home,
    authenticated: false,
  },
  {
    path: "/notes",
    name: "Notes ",
    component: Notes,
    authenticated: false,
  },
];

export default appRoutes;
