import { lazy } from "react";
import WithLayout from "../components/layout";


const Home = lazy(() => import("../pages/Home"));
const Server = lazy(() => import("../pages/Sever"));


const routes = [
    {
        path: "/",
        component: WithLayout(Home),
        exact: true,
    },
    {
      path: "/server",
      component: WithLayout(Server),
      exact: true,
  },

]


export default routes