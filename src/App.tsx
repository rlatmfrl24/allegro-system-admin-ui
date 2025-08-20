import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Main } from "./pages/Main";
import { NotFound } from "./pages/NotFound";
import { dataProvider } from "./DataProvider";

export const App = () => (
  <Admin layout={MainLayout} error={NotFound} dataProvider={dataProvider}>
    <Resource name="chunks" />
    <CustomRoutes>
      <Route path="/main" element={<Main />} />
    </CustomRoutes>
  </Admin>
);
