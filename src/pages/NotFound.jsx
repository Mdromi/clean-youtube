import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Container maxWidth={"md"} sx={{ marginTop: 16 }}>
      <Typography variant={"h2"} align="center">
        404 Page Not Found
      </Typography>
    </Container>
  );
};

export default NotFound;
