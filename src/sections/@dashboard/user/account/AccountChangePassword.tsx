import * as Yup from "yup";
// form
import { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { Stack, Card } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// @types
import { IUserAccountChangePassword } from "../../../../@types/user";
// components
import Iconify from "../../../../components/iconify";
import { useSnackbar } from "../../../../components/snackbar";
import FormProvider, { RHFTextField } from "../../../../components/hook-form";
import { useAuthContext } from "../../../../auth/useAuthContext";

import axios from "axios";

// ----------------------------------------------------------------------

type FormValuesProps = IUserAccountChangePassword;

export default function AccountChangePassword() {
  const { enqueueSnackbar } = useSnackbar();
  const [isSubmit, setIsSubmit] = useState(false);
  const { user } = useAuthContext();

  const [data, setData] = useState<FormValuesProps>({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    if (isSubmit) {
      const formData = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        email: user?.email || "",
      };
      axios
        .post("http://localhost:3001/api/gdvn/change-password", formData)
        .then((res) => {
          enqueueSnackbar(res.data.message);
          setIsSubmit(false);
        })
        .catch((error) => {
          enqueueSnackbar(error.response.data.message, { variant: "error" });
        });
    }
  }, [isSubmit, setIsSubmit, user, data, enqueueSnackbar]);

  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Nhập mật khẩu cũ"),
    newPassword: Yup.string()
      .min(6, "Mật khẩu phải dài hơn 6 ký tự")
      .required("Nhập mật khẩu mới"),
    confirmNewPassword: Yup.string().oneOf(
      [Yup.ref("newPassword"), null],
      "Mật khẩu chưa khớp"
    ),
  });

  const defaultValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      setData({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword,
      });
      reset();
      setIsSubmit(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <Stack spacing={3} alignItems="flex-end" sx={{ p: 3 }}>
          <RHFTextField
            name="oldPassword"
            type="password"
            label="Old Password"
          />

          <RHFTextField
            name="newPassword"
            type="password"
            label="New Password"
            helperText={
              <Stack component="span" direction="row" alignItems="center">
                <Iconify icon="eva:info-fill" width={16} sx={{ mr: 0.5 }} /> Mật
                khẩu phải dài hơn 6 ký tự
              </Stack>
            }
          />

          <RHFTextField
            name="confirmNewPassword"
            type="password"
            label="Confirm New Password"
          />

          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </Card>
    </FormProvider>
  );
}
