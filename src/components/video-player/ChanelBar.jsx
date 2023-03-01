import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ChanelBar = ({ chanelName }) => {
  return (
    <Box sx={{ marginTop: 3, marginBottom: 2 }}>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ cursor: "pointer" }}>
          {chanelName.charAt(0).toUpperCase()}
        </Avatar>
        <Typography
          sx={{ cursor: "pointer" }}
          variant="h6"
          color="text.primary"
        >
          {chanelName}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ChanelBar;
