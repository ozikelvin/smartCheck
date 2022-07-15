import { lazy } from "react";
import WithLayout from "../components/layout";


const Home = lazy(() => import("../pages/Home"));



const routes = [
    {
        path: "/",
        component: WithLayout(Home),
        exact: true,
      },

]


export default routes