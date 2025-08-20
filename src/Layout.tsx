import type { ReactNode } from "react";
import { Layout as RaLayout } from "react-admin";
import SideNavigation from "./components/SideNavigation";
import { MainAppBar } from "./components/MainAppBar";

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <RaLayout
    appBar={MainAppBar}
    sidebar={SideNavigation}
    sx={{
      "& .RaLayout-content": {
        padding: 0,
      },
    }}
  >
    {children}
  </RaLayout>
);
