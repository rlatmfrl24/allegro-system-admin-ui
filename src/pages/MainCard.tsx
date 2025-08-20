import { Box, Card, Typography } from "@mui/material";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import type { NavigationItem } from "../types/navigation";

export const MainCard = ({
  isExpanded,
  onClick,
  data,
}: {
  isExpanded: boolean;
  onClick: () => void;
  data: NavigationItem;
}) => {
  return (
    <Box flex={1} minWidth={0} height={isExpanded ? 640 : "fit-content"}>
      <Card
        sx={{
          p: 3,
          borderRadius: 2,
          cursor: "pointer",
          height: "100%",
          overflow: "hidden",
        }}
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
          {data.label}
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={400}
          color="#858E96"
          whiteSpace="nowrap"
          overflow="hidden"
          sx={{ textOverflow: "ellipsis" }}
        >
          {data.description}
        </Typography>
      </Card>
    </Box>
  );
};
