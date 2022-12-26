import * as Yup from "yup";
import { useCallback, useState, useEffect } from "react";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// @mui
import { LoadingButton } from "@mui/lab";
import { Grid, Card, Chip, Stack, TextField, Typography } from "@mui/material";
//components
import { useSnackbar } from "../../../components/snackbar";
import { CustomFile } from "../../../components/upload";
import { onFileChange } from "../../../utils/uploadImage";
import FormProvider, {
  RHFUpload,
  RHFTextField,
  RHFAutocomplete,
} from "../../../components/hook-form";
import axios from "axios";
//

// ----------------------------------------------------------------------

const TAGS_OPTION = ["Phần Mềm", "Giáo Dục", "Thiết Bị Dạy Học"];

// ----------------------------------------------------------------------

export type FormValuesProps = {
  title: string;
  description: string;
  image: CustomFile | string | null;
  tags: any;
};

export default function BlogNewPostForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [data, setData] = useState<FormValuesProps>({
    title: "",
    description: "",
    image: null,
    tags: [],
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const NewBlogSchema = Yup.object().shape({
    title: Yup.string().required("Nhập tiêu đề"),
    description: Yup.string().required("Nhập mô tả"),
    image: Yup.mixed().required("Chọn ảnh").nullable(true),
  });

  useEffect(() => {
    if (isSubmit) {
      const formData = {
        title: data.title,
        description: data.description,
        image: data.image,
        tags: data.tags,
      };
      axios({
        method: "post",
        url: "http://localhost:3001/api/gdvn/post",
        data: formData,
      })
        .then(() => {
          setIsSubmit(false);
        })
        .catch((err) => console.log(err));
    }
  }, [data, isSubmit]);

  const defaultValues = {
    title: "",
    description: "",
    image: null,
    tags: ["Giáo dục"],
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(NewBlogSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      console.log(data);
      const imageUrl: string = await onFileChange(data.image);
      console.log({ imageUrl });
      setData({
        title: data.title,
        description: data.description,
        image: imageUrl,
        tags: data.tags,
      });
      setIsSubmit(true);
      console.log(data);
      reset();
      enqueueSnackbar("Nhập thành công!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      console.log(file);

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("image", newFile);
      }
    },
    [setValue]
  );

  const handleRemoveFile = () => {
    setValue("image", null);
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <RHFTextField name="title" label="Tiêu đề" />

                <RHFTextField
                  name="description"
                  label="Mô tả"
                  multiline
                  rows={3}
                />

                <Stack spacing={1}>
                  <Typography
                    variant="subtitle2"
                    sx={{ color: "text.secondary" }}>
                    Hình ảnh
                  </Typography>

                  <RHFUpload
                    name="image"
                    maxSize={3145728}
                    onDrop={handleDrop}
                    onDelete={handleRemoveFile}
                  />
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <RHFAutocomplete
                  name="tags"
                  multiple
                  freeSolo
                  onChange={(event, newValue) => setValue("tags", newValue)}
                  options={TAGS_OPTION.map((option) => option)}
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        key={option}
                        size="small"
                        label={option}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField label="Lĩnh vực hoạt động" {...params} />
                  )}
                />
              </Stack>
            </Card>

            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
              <LoadingButton
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                loading={isSubmitting}>
                Lưu
              </LoadingButton>
            </Stack>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  );
}
