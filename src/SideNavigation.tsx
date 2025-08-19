import { Box, Drawer, Typography } from "@mui/material";
import { useLocale, useSidebarState } from "react-admin";

export default function SideNavigation() {
  const [open, setOpen] = useSidebarState();
  useLocale();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <Drawer open={open} onClose={toggleSidebar}>
      <Box>
        <Typography>System Admin</Typography>
      </Box>
    </Drawer>
  );
}
