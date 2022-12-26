import {
  Box,
  // Button,
  // Checkbox,
  // FormControlLabel,
  Grid,
  // Link,
  Stack,
  // TextField,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { keyframes } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useSnackbar } from "../../../components/snackbar";

import FormProvider, { RHFTextField } from "../../../components/hook-form";

import { Link as RouterLink } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { useState, useEffect } from "react";
import axios from "axios";

export type FormValuesProps = {
  email: string;
  password: string;
  confirmPassword?: string;
};
function Register() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<FormValuesProps>({
    email: "",
    password: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (isSubmit) {
      const formData = {
        email: data.email,
        password: data.password,
      };
      axios({
        method: "post",
        url: "http://localhost:3001/api/gdvn/register",
        data: formData,
      })
        .then(() => {
          setIsSubmit(false);
        })
        .catch((err) => console.log(err));
    }
  }, [data, isSubmit]);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Email không hợp lệ").required("Nhập email"),
    password: Yup.string().required("Nhập password"),
    confirmPassword: Yup.string().required("Xác nhận mật khẩu"),
  });
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
  const defaultValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    reset,
    // setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      setData({
        email: data.email,
        password: data.password,
      });
      setIsSubmit(true);
      reset();
      enqueueSnackbar("Đăng ký thành công!");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Đăng ký</title>
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
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
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
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textShadow: "0px 3px 3px #999999",
                  }}>
                  Đăng ký
                </Typography>
                {/* <TextField
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
                /> */}
                <Stack spacing={3} mt={3} mb={3}>
                  <RHFTextField
                    sx={{ color: "white" }}
                    name="email"
                    label="Email"
                    required
                  />
                  <RHFTextField
                    name="password"
                    type="password"
                    sx={{ color: "white" }}
                    label="Mật khẩu"
                    required
                  />
                  <RHFTextField
                    name="confirmPassword"
                    type="password"
                    sx={{ color: "white" }}
                    label="Xác nhận mật khẩu"
                    required
                  />
                </Stack>

                {/* <TextField
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
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label={
                    <Typography sx={{ color: "#fff", display: "inline-block" }}>
                      Xác nhận mật khẩu
                    </Typography>
                  }
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  color="primary"
                /> */}
                {/* <RouterLink to="/"> */}
                {/* <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    fontSize: { xs: "12px!important", sm: "unset" },
                  }}>
                  Đăng ký
                </Button> */}
                <LoadingButton
                  fullWidth
                  type="submit"
                  variant="contained"
                  // size="large"
                  loading={isSubmitting}>
                  Đăng ký
                </LoadingButton>
                {/* </RouterLink> */}
                <Grid container mt={3}>
                  <Grid item>
                    <RouterLink
                      to="/auth/login"
                      style={{
                        color: "hsl(218, 81%, 85%)!important",
                        // fontSize: {
                        //   xs: "12px!important",
                        //   sm: "unset",
                        // },
                        textDecoration: "none",
                      }}>
                      {/* <Link
                        variant="body2"
                        sx={{
                          color: "hsl(218, 81%, 85%)!important",
                          fontSize: {
                            xs: "12px!important",
                            sm: "unset",
                          },
                          textDecoration: "none",
                        }}> */}
                      Bạn đã có tài khoản?
                      {/* </Link> */}
                    </RouterLink>
                  </Grid>
                </Grid>
              </Box>
            </FormProvider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Register;
