import { Box, Card, Typography } from "@mui/material";
import mainLayer1 from "../assets/main-layer-1.svg";
import mainLayer2 from "../assets/main-layer-2.svg";
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";

export const Main = () => {
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection={"column"}
      height="100%"
    >
      <Box position="absolute" top={0} right={0} zIndex={1}>
        <img src={mainLayer1} alt="main-layer-1" />
      </Box>
      <Box position="absolute" top={0} right={493} zIndex={1}>
        <img src={mainLayer2} alt="main-layer-2" />
      </Box>
      <Box zIndex={2} display="flex" alignItems="center" height="100%">
        <Typography fontSize={45} fontWeight={600} ml={5} lineHeight={"52px"}>
          ALLEGRO NX System Admin
          <br /> super easy and quick for everyone.
        </Typography>
      </Box>
      <Box zIndex={3} p={5} gap={3} display="flex" alignItems="center">
        <MainCard
          title="챗봇 응답 지식 관리"
          description="Additional description of this menu"
        />
        <MainCard
          title="Comming Soon"
          description="Additional description of this menu"
        />
        <MainCard
          title="Comming Soon"
          description="Additional description of this menu"
        />
        <MainCard
          title="Comming Soon"
          description="Additional description of this menu"
        />
      </Box>
    </Box>
  );
};

const MainCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box flex={1}>
      <Card sx={{ p: 3, borderRadius: 2, cursor: "pointer" }}>
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
