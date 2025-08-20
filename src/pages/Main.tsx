import { Box, Card, Typography } from "@mui/material";
import mainLayer1 from "../assets/main-layer-1.svg";
import mainLayer2 from "../assets/main-layer-2.svg";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import { useState } from "react";
import { useGetList } from "react-admin";
import type { NavigationItem } from "../types/navigation";

const TARGET_NAV_ID = [
  "knowledge",
  "chatbot-settings",
  "settings",
  "customer-support",
];

export const Main = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data: navItems, isPending } = useGetList<NavigationItem>("navMenu", {
    sort: { field: "index", order: "ASC" },
  });

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
              title={child.label}
              description={""}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

const MainCard = ({
  title,
  description,
  isExpanded,
  onClick,
}: {
  title: string;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
}) => {
  return (
    <Box flex={1} height={isExpanded ? 640 : "fit-content"}>
      <Card
        sx={{ p: 3, borderRadius: 2, cursor: "pointer", height: "100%" }}
        onClick={onClick}
      >
        <Box
          color="#5E5ADB"
          bgcolor="#EAE9FF"
          width={48}
          height={48}
          borderRadius={99}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AssistantOutlinedIcon sx={{ fontSize: 36 }} />
        </Box>
        <Typography fontSize={28} fontWeight={600} mt={2} mb={1}>
          {title}
        </Typography>
        <Typography fontSize={16} fontWeight={400} color="#858E96">
          {description}
        </Typography>
      </Card>
    </Box>
  );
};
