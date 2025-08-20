import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from "@mui/material";
import { useLocale, useSidebarState } from "react-admin";
import { theme } from "./Theme";
import { MenuOpen } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import { NAV_ITEMS } from "./constants/navigation";
import type { NavigationItem } from "./types/navigation";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type MenuItem = NavigationItem;

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

  const menuItems = useMemo(() => NAV_ITEMS as MenuItem[], []);

  useEffect(() => {
    if (!open) {
      setExpanded({} as Record<string, boolean>);
    }
  }, [open]);

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
              containerBg: "#4C4A76",
              fontSize: 16,
            } as const;
          }
          return style;
        }
        if (depth === 1) {
          const style = {
            containerBg: theme.palette.signature.dark,
            textColor: "#ffffff",
            fontSize: 14,
            paddingLeft: 7,
            height: 36,
          } as const;
          if (hasChildren && isExpanded) {
            return {
              ...style,
              containerBg: "#4C4A76",
              fontSize: 14,
            } as const;
          }
          return style;
        }
        return {
          containerBg: "#ffffff",
          textColor: theme.palette.signature.dark,
          fontSize: 12,
          paddingLeft: 8,
          height: 32,
        } as const;
      })();

      const fontWeight = depth === 0 ? (isExpanded ? 600 : 400) : 600;
      const lineHeight = depth === 0 ? "24px" : depth === 1 ? "20px" : "16px";

      return (
        <Box key={item.id} sx={{ backgroundColor: stylesByDepth.containerBg }}>
          <ListItemButton
            onClick={
              hasChildren ? () => toggleExpand(item.id) : () => toggleSidebar()
            }
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
              borderBottom: "1px solid #ADB3B9",
            }}
          >
            {depth === 0 && (
              <ListItemIcon
                sx={{ minWidth: 0, mr: 1, color: stylesByDepth.textColor }}
              >
                <AssistantOutlinedIcon />
              </ListItemIcon>
            )}
            <ListItemText primary={item.label} />
            {hasChildren && (
              <ArrowDropDownIcon
                sx={{
                  color: stylesByDepth.textColor,
                  fontSize: 24,
                  transition: "transform 0.3s ease-in-out",
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            )}
          </ListItemButton>
          {hasChildren && (
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              <List disablePadding>
                {renderItems(item.children!, depth + 1)}
              </List>
            </Collapse>
          )}
        </Box>
      );
    });
  };

  return (
    <Drawer open={open} onClose={toggleSidebar}>
      <Box minWidth={368} bgcolor={"#2C2A56"} height={"100%"}>
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
