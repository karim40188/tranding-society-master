import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useContext } from "react";
import { TokenContext } from "./context/Context";

function Register() {
  let { token, setToken } = useContext(TokenContext);
  async function signUp(values) {
    const formData = new FormData();
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("phone_number", values.phone_number);
    formData.append("broker", values.broker);
    formData.append(
      "broker_registration_email",
      values.broker_registration_email
    );
    formData.append("country", values.country);
    formData.append("id_number", values.id_number);
    formData.append("sponsor_id", values.sponsor_id);
    formData.append("is_subscribed", values.is_subscribed ? "1" : "0"); // إما 1 أو 0 كنص
    formData.append("id_photo_front", values.id_photo_front);
    formData.append("id_photo_back", values.id_photo_back);
    formData.append("selfie_with_id", values.selfie_with_id);
    formData.append("profile_image", values.profile_image);

    try {
      let res = await axios.post(
        `https://tradingsociety.net/api/api/v1/register`,
        formData
      );
      console.log(res);
      localStorage.setItem("token", res?.data?.token);
      console.log(res?.data?.token);
      setToken(res?.data?.token);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  let formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone_number: "",
      broker: "",
      broker_registration_email: "",
      country: "",
      id_number: "",
      sponsor_id: "",
      profile_image: null,
      is_subscribed: false, // Default value
      id_photo_front: null,
      id_photo_back: null,
      selfie_with_id: null,
    },
    onSubmit: signUp,
  });

  return (
    <Box sx={{ my: "20px" }}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          mx: "auto",
          gap: "10px",
        }}
      >
        <Typography sx={{ fontWeight: "600", fontSize: "45px" }}>
          Register
        </Typography>
        <TextField
          label="First Name"
          type="text"
          name="first_name"
          className="text-field"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Last Name"
          type="text"
          name="last_name"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Phone Number"
          type="tel"
          name="phone_number"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Broker"
          type="text"
          name="broker"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Broker Registration Email"
          type="text"
          name="broker_registration_email"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Country"
          type="text"
          name="country"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="ID Number"
          type="number"
          name="id_number"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />
        <TextField
          label="Sponsor ID"
          type="text"
          name="sponsor_id"
          onChange={formik.handleChange}
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="is_subscribed"
              checked={formik.values.is_subscribed}
              onChange={(event) => {
                console.log(event.target.checked);
                formik.setFieldValue("is_subscribed", event.target.checked);
              }}
              slotProps={{
                input: {
                  style: {
                    color: "#fff",
                  },
                },
              }}
            />
          }
          label="Is Subscribed"
        />

        <TextField
          label="ID Photo Front"
          type="file"
          name="id_photo_front"
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
          onChange={(event) => {
            formik.setFieldValue(
              "id_photo_front",
              event.currentTarget.files[0]
            );
          }}
        />

        <TextField
          label="ID Photo Back"
          type="file"
          name="id_photo_back"
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
          onChange={(event) => {
            formik.setFieldValue("id_photo_back", event.currentTarget.files[0]);
          }}
        />

        <TextField
          label="Profile Image"
          type="file"
          name="profile_image"
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
          onChange={(event) => {
            formik.setFieldValue("profile_image", event.currentTarget.files[0]);
          }}
        />
        <TextField
          label="Selfie With ID"
          type="file"
          name="selfie_with_id"
          slotProps={{
            input: {
              style: {
                color: "#fff",
              },
            },
          }}
          onChange={(event) => {
            const file = event.currentTarget.files[0];
            if (file) {
              const validTypes = ["image/jpeg", "image/png", "image/jpg"];
              if (validTypes.includes(file.type)) {
                formik.setFieldValue("selfie_with_id", file);
              } else {
                alert("الرجاء تحميل صورة بصيغة jpg أو jpeg أو png");
              }
            }
          }}
        />

        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  );
}

export default Register;
