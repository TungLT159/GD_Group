import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { Helmet } from "react-helmet-async";

import { Link as RouterLink } from "react-router-dom";

function Login() {
  const moveDown = keyframes`
    0% {top:14%},
    25% {top:16%},
    50%{top:18%},
    75%{top:20%},
    100%(top:22%)
    `;
  const moveUp = keyframes`
    0% {bottom:7%},
    25% {bottom:9%},
    50%{bottom:11%},
    75%{bottom:13%},
    100%(bottom:15%)
    `;
  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "hsl(218, 41%, 15%)",
          backgroundImage:
            "radial-gradient(650px circle at 0% 0%,hsl(218, 41%, 35%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%),radial-gradient(1250px circle at 100% 100%,hsl(218, 41%, 45%) 15%,hsl(218, 41%, 30%) 35%,hsl(218, 41%, 20%) 75%,hsl(218, 41%, 19%) 80%,transparent 100%)",
          height: "100vh",
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}>
        <Grid container sx={{ padding: "40px" }}>
          <Grid
            md={6}
            lg={6}
            item
            sx={{
              display: { xs: "none", md: "flex", lg: "flex" },
              padding: "40px",
              height: "100vh",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography
              variant="h2"
              sx={{ color: "#fff", fontWeight: "bold", marginBottom: "20px" }}>
              Chào mừng đến với
              <span style={{ color: "hsl(218, 81%, 75%)", marginLeft: "20px" }}>
                GD Group
              </span>
            </Typography>
            <Typography variant="body1" sx={{ color: "hsl(218, 81%, 85%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis accusantium minima blanditiis, dolore excepturi
              sapiente quod sunt exercitationem fugit repudiandae.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={6}
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              position: { xs: "absolute", md: "unset" },
              top: { xs: "-3%", sm: "-3%", md: "unset" },
              left: { xs: "12%", sm: "18%", md: "unset" },
              "&::before": {
                content: "''",
                height: "220px",
                width: "220px",
                position: "absolute",
                borderRadius: "50%",
                top: "14%",
                left: "54%",
                background: "radial-gradient(#44006b, #ad1fff)",
                overflow: "hidden",
                animation: `${moveDown} 10s linear infinite alternate`,
              },
              "&::after": {
                content: "''",
                borderRadius: "38% 62% 63% 37% / 70% 33% 67% 30%",
                position: "absolute",
                bottom: "7%",
                right: "1%",
                zIndex: -1,
                width: "300px",
                height: "300px",
                background: "radial-gradient(#44006b, #ad1fff)",
                overflow: "hidden",
                animation: `${moveUp} 10s linear infinite alternate`,
              },
            }}>
            <Box
              sx={{
                width: { xs: "300px", sm: "500px" },
                backgroundColor: "rgba(255, 255, 255, 0.1)!important",
                backdropFilter: "blur(10px)",
                boxShadow:
                  "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
                color: "#fff!important",
                padding: "80px 40px",
                borderRadius: "10px",
              }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", textShadow: "0px 3px 3px #999999" }}>
                Đăng nhập
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label={
                  <Typography sx={{ color: "#fff", display: "inline-block" }}>
                    Email
                  </Typography>
                }
                FormHelperTextProps={{ color: "#fff" }}
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ textColor: "white" }}
                color="primary"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label={
                  <Typography sx={{ color: "#fff", display: "inline-block" }}>
                    Mật khẩu
                  </Typography>
                }
                type="password"
                id="password"
                autoComplete="current-password"
                color="primary"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Nhớ mật khẩu"
                sx={{
                  color: "#fff!important",
                  fontSize: { xs: "12px!important", sm: "unset" },
                }}
              />
              <RouterLink to="/">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    fontSize: { xs: "12px!important", sm: "unset" },
                  }}>
                  Đăng nhập
                </Button>
              </RouterLink>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: "hsl(218, 81%, 85%)!important",
                      fontSize: {
                        xs: "12px!important",
                        sm: "unset",
                      },
                      textDecoration: "none",
                    }}>
                    Quên mật khẩu?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "hsl(218, 81%, 85%)!important",
                      fontSize: {
                        xs: "12px!important",
                        sm: "unset",
                      },
                      textDecoration: "none",
                      transform: "translateY(20%)",
                    }}>
                    <RouterLink to="/auth/register">Đăng ký</RouterLink>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Login;
