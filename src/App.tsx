import { Admin, Resource } from "react-admin";
import { MainLayout } from "./Layout";

export const App = () => (
  <Admin layout={MainLayout}>
    <Resource name="users" />
  </Admin>
);
