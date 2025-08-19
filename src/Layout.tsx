import type { ReactNode } from "react";
import { Layout, CheckForApplicationUpdate, AppBar } from "react-admin";
import SideNavigation from "./SideNavigation";
import NXLogo from "./assets/logo-nx.svg?react";
import SolutionIcon from "./assets/icon-solution.svg?react";
import FlowIcon from "./assets/icon-flow.svg?react";
import NotificationIcon from "./assets/icon-notification.svg?react";
import UserIcon from "./assets/icon-user-profile.svg?react";
import BusinessIcon from "./assets/icon-business.svg?react";
import { Search } from "@mui/icons-material";
import { theme } from "./Theme";
import { Box, Divider, IconButton, InputBase, Typography } from "@mui/material";

export const MainLayout = ({ children }: { children: ReactNode }) => (
  <Layout appBar={MainAppBar} sidebar={SideNavigation}>
    {children}
    <CheckForApplicationUpdate />
  </Layout>
);

const MainAppBar = () => (
  <AppBar
    sx={{ backgroundColor: theme.palette.signature.dark }}
    toolbar={<Toolbar />}
  >
    <Box width="100%" display="flex">
      <NXLogo />
      <Box>
        <InputBase
          startAdornment={
            <Search
              sx={{ fontSize: 16, m: 1, color: theme.palette.signature.light }}
            />
          }
          placeholder="Search"
          sx={{
            backgroundColor: theme.palette.signature.main,
            borderRadius: "28px",
            mx: 1.5,
            px: 0.5,
            color: "white",
            fontSize: 14,
            minWidth: 336,
          }}
        />
      </Box>
    </Box>
  </AppBar>
);

const Toolbar = () => (
  <>
    <IconButton>
      <SolutionIcon width={24} height={24} />
    </IconButton>
    <IconButton>
      <FlowIcon width={24} height={24} />
    </IconButton>
    <IconButton>
      <NotificationIcon width={24} height={24} />
    </IconButton>
    <Divider
      orientation="vertical"
      sx={{
        mx: 1.5,
        height: 28,
        backgroundColor: theme.palette.signature.main,
      }}
    />
    <Box width={16} height={16} display="flex" alignItems="center">
      <BusinessIcon />
    </Box>
    <Typography ml={0.5} fontSize={12} fontWeight={500} lineHeight={1}>
      ABCDE
    </Typography>
    <Divider
      orientation="vertical"
      sx={{ mx: 1, height: 12, backgroundColor: theme.palette.signature.light }}
    />
    <Typography fontSize={12} fontWeight={500}>
      SELHO
    </Typography>
    <IconButton sx={{ ml: 1 }}>
      <UserIcon width={24} height={24} />
    </IconButton>
  </>
);
