import { Box, Button, Typography } from "@mui/material";

function Session() {
  return (
    <Box
      sx={{
        maxHeight: { xs: "176px", sm: "unset" },
        minHeight: { sm: "300px" },
        background: "rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)",
        display: "flex",
        boxShadow:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        justifyContent: "center",
        flexDirection: "column",
        gap: "40px",
        padding: "16px 50px",
        alignItems: "center",
        textAlign: "center",
      }}>
      <Typography variant="body1" sx={{ fontSize: { xs: "14", sm: "24px" } }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        exercitationem officia amet distinctio!
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <Button
          variant="contained"
          sx={{
            width: { xs: "108px", sm: "unset" },
            height: { xs: "29px", sm: "unset" },
            fontSize: { xs: "11px", sm: "unset" },
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}>
          Join Today
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#fff",
            color: "#1976d2",
            width: { xs: "108px", sm: "unset" },
            height: { xs: "29px", sm: "unset" },
            fontSize: { xs: "11px", sm: "unset" },
            "&:hover": { background: "unset" },
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}

export default Session;
