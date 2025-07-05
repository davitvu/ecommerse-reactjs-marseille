import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@pages/Home/Home";
import routes from "@routes/routes";
import { Suspense } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App
