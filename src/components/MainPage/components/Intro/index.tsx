import { Container } from "@mui/material";
import Activity from "./Activity";
import ListImage from "./ListImage";

function Intro() {
  return (
    <Container
      sx={{
        padding: { xs: "50px 25px 0 25px!important", sm: "100px 30px 0 30px!important" },
        marginBottom: { xs:'-25px', sm:'unset'}
      }}
      maxWidth="xl">
      <ListImage />
      <Activity />
    </Container>
  );
}

export default Intro;
