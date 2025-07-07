import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import routes from "@/routes/routes";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <SidebarProvider>
        <BrowserRouter>
          <Suspense fallback={<div>Loading</div>}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Sidebar />
      </SidebarProvider>
    </>
  );
}

export default App
