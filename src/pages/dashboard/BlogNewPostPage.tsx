import { Helmet } from "react-helmet-async";
// @mui
import { Container } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../routes/paths";
// components
import { useSettingsContext } from "../../components/settings";
import CustomBreadcrumbs from "../../components/custom-breadcrumbs";
// sections
import { BlogNewPostForm } from "../../sections/@dashboard/blog";

// ----------------------------------------------------------------------

export default function BlogNewPostPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title>Nhập thông tin công ty</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "lg"}>
        <CustomBreadcrumbs
          heading="Nhập thông tin"
          links={[
            {
              name: "Dashboard",
              href: PATH_DASHBOARD.root,
            },
            {
              name: "Thông tin công ty",
              href: PATH_DASHBOARD.blog.root,
            },
            {
              name: "Nhập thông tin",
            },
          ]}
        />

        <BlogNewPostForm />
      </Container>
    </>
  );
}
