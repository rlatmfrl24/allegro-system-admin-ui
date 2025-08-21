import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { MainLayout } from "./Layout";
import { Main } from "./pages/Main";
import { dataProvider } from "./DataProvider";
import ChunksList from "./pages/chunks/ChunksList";

export const App = () => (
  <Admin layout={MainLayout} dataProvider={dataProvider}>
    <Resource name="chunks" list={ChunksList} />
    <CustomRoutes>
      <Route path="/main" element={<Main />} />
    </CustomRoutes>
  </Admin>
);
