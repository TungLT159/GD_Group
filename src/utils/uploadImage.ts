export const uploadImageToCloud = async (formData: any) => {
  // const CLOUDINARY_URL = process.env.REACT_APP_CLOUDINARY_URL;
  // const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME;

  // console.log(CLOUDINARY_NAME, CLOUDINARY_URL);

  try {
    const imgUpload = await fetch(
      `https://api.cloudinary.com/v1_1/dld3ose8t/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await imgUpload.json();
    if (data) {
      return data.secure_url;
    }
  } catch (err) {
    console.log(err);
  }
};

// export const checkExistImage = async () => {
//   try {
//     const imageUpload = await fetch(
//       "https://218884566882356:HQYp0gjAxkscB2ja4JtSQKON8PE@api.cloudinary.com/v1_1/dld3ose8t/resources/image"
//     );
//     const data = await imageUpload.json();
//     console.log(data);
//   } catch {}
// };

export const onFileChange = async (file: any) => {
  const formData = new FormData();
  // const CLOUDINARY_PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;
  // if (CLOUDINARY_PRESET) {
  formData.append("upload_preset", "tunglt");
  // }
  try {
    formData.append("file", file);
    const imageUrl = await uploadImageToCloud(formData);

    if (imageUrl) {
      return imageUrl;
    }
  } catch (err) {
    console.error(err);
  }
};
