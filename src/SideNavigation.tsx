import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { useLocale, useSidebarState } from "react-admin";
import { theme } from "./Theme";
import { MenuOpen } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { FakeMenuItems } from "./constants";

type MenuItem = {
  label: string;
  id: string;
  children?: MenuItem[];
};

export default function SideNavigation() {
  const [open, setOpen] = useSidebarState();
  useLocale();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => ({
    knowledge: true,
    "knowledge-chunk": true,
  }));

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const menuItems = useMemo(() => FakeMenuItems as MenuItem[], []);

  const renderItems = (items: MenuItem[], depth = 0) => {
    return items.map((item) => {
      const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;
      const isExpanded = !!expanded[item.id];

      const stylesByDepth = (() => {
        if (depth === 0) {
          const style = {
            containerBg: theme.palette.signature.dark,
            textColor: "#ffffff",
            paddingLeft: 2,
            fontSize: 16,
            height: 44,
          } as const;
          if (isExpanded) {
            return {
              ...style,
              containerBg: theme.palette.signature.main,
              fontSize: 16,
            } as const;
          }
          return style;
        }
        if (depth === 1) {
          return {
            containerBg: theme.palette.signature.main,
            textColor: "#ffffff",
            fontSize: 14,
            paddingLeft: 4,
            height: 36,
          } as const;
        }
        return {
          containerBg: "#ffffff",
          textColor: theme.palette.signature.dark,
          fontSize: 12,
          paddingLeft: 6,
          height: 32,
        } as const;
      })();

      const fontWeight = depth === 0 ? (isExpanded ? 600 : 400) : 600;
      const lineHeight = depth === 0 ? "24px" : depth === 1 ? "20px" : "16px";
      let dividerBg = theme.palette.signature.main;
      if (depth === 0) {
        dividerBg = theme.palette.signature.dark;
      }

      return (
        <Box key={item.id} sx={{ backgroundColor: stylesByDepth.containerBg }}>
          <ListItemButton
            onClick={hasChildren ? () => toggleExpand(item.id) : undefined}
            sx={{
              pl: stylesByDepth.paddingLeft,
              py: 0,
              height: stylesByDepth.height,
              "& .MuiListItemText-primary": {
                color: stylesByDepth.textColor,
                fontSize: stylesByDepth.fontSize,
                fontWeight,
                lineHeight,
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
          {hasChildren && (
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              {depth >= 2 ? null : (
                <Divider
                  sx={{
                    backgroundColor: dividerBg,
                  }}
                />
              )}
              <List disablePadding>
                {renderItems(item.children!, depth + 1)}
              </List>
            </Collapse>
          )}
          {depth >= 2 && <Divider sx={{ backgroundColor: "#ADB3B9" }} />}
        </Box>
      );
    });
  };

  return (
    <Drawer open={open} onClose={toggleSidebar}>
      <Box minWidth={368}>
        <Box
          bgcolor={theme.palette.signature.dark}
          height={54}
          px={1.5}
          display="flex"
          alignItems="center"
        >
          <IconButton onClick={toggleSidebar}>
            <MenuOpen sx={{ color: "white", fontSize: 24 }} />
          </IconButton>
        </Box>
        <Box>
          <List disablePadding>{renderItems(menuItems)}</List>
        </Box>
      </Box>
    </Drawer>
  );
}
