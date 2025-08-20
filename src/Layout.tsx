import type { ReactNode } from "react";
import { Layout as RaLayout } from "react-admin";
import SideNavigation from "./SideNavigation";
import { MainAppBar } from "./components/MainAppBar";

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <RaLayout appBar={MainAppBar} sidebar={SideNavigation}>
    {children}
  </RaLayout>
);
