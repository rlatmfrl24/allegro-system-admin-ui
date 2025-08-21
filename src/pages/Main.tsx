import { Box, Typography } from "@mui/material";
import mainLayer1 from "../assets/main-layer-1.svg";
import mainLayer2 from "../assets/main-layer-2.svg";
import { useEffect, useRef, useState } from "react";
import { useGetList } from "react-admin";
import type { NavigationItem } from "../types/navigation";
import { MainCard } from "./MainCard";

const TARGET_NAV_ID = [
  "knowledge",
  "chatbot-settings",
  "settings",
  "customer-support",
];

export const Main = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { data: navItems, isPending } = useGetList<NavigationItem>("navMenu", {
    sort: { field: "index", order: "ASC" },
  });

  const handleCardClick = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (!expandedId) return;
      const currentRef = cardRefs.current[expandedId];
      if (!currentRef) return;
      const target = event.target as Node;
      if (!currentRef.contains(target)) {
        setExpandedId(null);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [expandedId]);

  const targetNavItems = navItems
    ? TARGET_NAV_ID.map((id) => navItems.find((item) => item.id === id))
        .filter((item): item is NavigationItem => !!item)
        .sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
    : [];

  return (
    <Box position="relative" height="100%">
      <Box position="absolute" top={0} right={0} zIndex={1}>
        <img src={mainLayer1} alt="main-layer-1" />
      </Box>
      <Box position="absolute" top={0} right={493} zIndex={1}>
        <img src={mainLayer2} alt="main-layer-2" />
      </Box>
      <Typography
        fontSize={45}
        fontWeight={600}
        lineHeight={"52px"}
        position="absolute"
        top={247}
        left={40}
      >
        ALLEGRO NX System Admin
        <br /> super easy and quick for everyone.
      </Typography>

      {!isPending && targetNavItems?.length > 0 && (
        <Box
          zIndex={3}
          p={5}
          gap={3}
          display="flex"
          alignItems="flex-end"
          position="absolute"
          bottom={0}
          left={0}
          width="100%"
        >
          {targetNavItems.map((child) => (
            <MainCard
              key={child.id}
              isExpanded={expandedId === child.id}
              onClick={() => handleCardClick(child.id)}
              data={child}
              ref={(el) => {
                cardRefs.current[child.id] = el;
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
