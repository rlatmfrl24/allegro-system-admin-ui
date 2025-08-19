import type { ReactNode } from "react";
import {
  Layout,
  CheckForApplicationUpdate,
  AppBar,
  TitlePortal,
} from "react-admin";
import { Typography } from "@mui/material";
import SideNavigation from "./SideNavigation";

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <Layout appBar={MainAppBar} sidebar={SideNavigation}>
    {children}
    <CheckForApplicationUpdate />
  </Layout>
);

const MainAppBar = () => (
  <AppBar>
    <TitlePortal>
      <Typography variant="h6">System Admin</Typography>
    </TitlePortal>
  </AppBar>
);
