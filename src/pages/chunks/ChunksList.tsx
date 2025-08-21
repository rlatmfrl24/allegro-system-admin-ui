import { Box, Typography } from "@mui/material";

export default function ChunksList() {
  return (
    <Box padding={1.5} height={"100%"}>
      <Box
        bgcolor={"white"}
        height={"100%"}
        borderRadius={1}
        border={1}
        borderColor={"#CCD2E3"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box borderBottom={1} borderColor={"#CCD2E3"}>
          <Typography>Breadcrumbs</Typography>
        </Box>
        <Box flex={1} p={1.5} display={"flex"} flexDirection={"column"} gap={1}>
          <Box border={1} borderRadius={1} borderColor={"#CCD2E3"}>
            Filter
          </Box>
          <Box flex={1} border={1} borderRadius={1} borderColor={"#CCD2E3"}>
            Data Grid
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
