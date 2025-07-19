import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import routes from "@/routes/routes";
import { SidebarProvider } from "@/contexts/SidebarProvider";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ToastProvider } from "@/contexts/ToastProvider";
import { StoreProvider } from "@/contexts/StoreProvider";

function App() {
  return (
    <>
      <StoreProvider>
        <ToastProvider>
          <SidebarProvider>
            <BrowserRouter>
              <Suspense fallback={<div>Loading</div>}>
                <Routes>
                  {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                  ))}
                </Routes>
              </Suspense>
              <Sidebar />
            </BrowserRouter>
          </SidebarProvider>
        </ToastProvider>
      </StoreProvider>
    </>
  );
}

export default App
