import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import routes from "@/routes/routes";

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
