import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import { Suspense} from "react";
import { LoadingIcon } from "../components/Loading";
import routes from "./routes";

const AppRouter = () => {
    return (
        <Suspense fallback={<LoadingIcon/>}>
        <Router>
          <Routes>
            {routes.map((item, i) => {
              return(
            
                <Route
                  key={i}
                  path={item.path}
                  exact={item.exact}
                  element={<item.component />}
                />
              );
            })}
          </Routes>
          {/* <Toaster
          position="top-center"
          toastOptions={{
            className: '',
            style: {
              margin: '30px',
              minWidth: '370px',
              display: 'inline-flex',
              fontSize: '18px',
              zIndex: 999999,
            },
            duration: 4000,
          }}
        /> */}
        </Router>
      </Suspense>
    )
}

export default AppRouter
