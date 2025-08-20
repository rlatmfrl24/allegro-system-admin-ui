import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route, Navigate } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound";

export const App = () => (
  <Admin layout={MainLayout} error={NotFound}>
    <Resource name="chunks" />
    <CustomRoutes>
      <Route path="/" element={<Navigate to="/main" replace />} />
      <Route path="/main" element={<Main />} />
    </CustomRoutes>
  </Admin>
);
