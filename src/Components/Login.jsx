import { Box, Button, TextField, Typography } from "@mui/material";
import registerLogo from "../assets/register_img.png";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {  useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let [err, setErr] = useState(false);
  let navigate = useNavigate();
  async function signIn(values) {
    let res = await axios.post(`https://tradingsociety.net/api/v1/login`, values).catch((err) => {
      console.log(err?.response?.data?.message?.email[0]);
      setErr(err?.response?.data?.message?.email[0]);
    });

    if (res?.data?.status == true) {
      localStorage.setItem("token", res?.data?.token);
      navigate("/");
    }
    console.log(res);
  }



  let validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .matches(
        /^[\w._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "email is not valid"
      ),
    password: Yup.string()
      .required("password is required")
      .matches(/^\w{8,}$/, "Password must be at least 8 characters long"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: signIn,
  });

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#191919",
        display: "flex",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          width: "50%",
          textAlign: "center",
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justfiyContent: "space-between",
          flexDirection: "column",
          backgroundColor: "#000",
        }}
      >
        <Box sx={{ width: { md: "80%", xl: "100%" } }}>
          <Box
            sx={{ width: "100%", backgroundSize: "cover" }}
            component="img"
            src={registerLogo}
          />
        </Box>
        <Typography
          sx={{ fontSize: "32px", lineHeight: "22.21px", color: "#fff" }}
        >
          IT'S NOT ABOUT STRATEGIES IT'S ABOUT SOCIETY
        </Typography>
      </Box>
      <Box sx={{ mt: "30px", width: "70%", mx: "auto", p: "10px" }}>
        <Typography
          sx={{ color: "#fff", fontSize: { xs: "30px", xl: "45px" } }}
        >
          Sign In
        </Typography>

        {err ? (
          <Typography sx={{ color: "red", fontSize: "30px" }}>{err}</Typography>
        ) : (
          ""
        )}
        <Box
          component="form"
          sx={{
            width: "90%",
            mx: "auto",
            mt: { lg: "30px", xl: "150px" },
            display: "flex",
            flexDirection: "column",
            gap: { xs: "20px", xl: "30px" },
            color: "#fff",
          }}
          onSubmit={formik.handleSubmit}
        >
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: "#2B2B2B", borderRadius: "10px" }}
              placeholder="E-mail"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextField>
            {formik.errors.email && formik.touched.email ? (
              <Box
                sx={{
                  // height: "50px",
                  fontSize: "22px",
                  display: "flex",
                  alignItems: "center",
                  color: "#dc3545",
                  padding: "10px",
                  my: 0,
                  py: 0,
                }}
              >
                {formik.errors.email}
              </Box>
            ) : (
              ""
            )}
          </Box>
          <Box>
            <TextField
              fullWidth
              variant="outlined"
              sx={{ backgroundColor: "#2B2B2B", borderRadius: "10px" }}
              placeholder="Password"
              value={formik.values.password}
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextField>

            {formik.errors.password && formik.touched.password ? (
              <Box
                sx={{
                  // height: "50px",
                  fontSize: "22px",
                  display: "flex",
                  alignItems: "center",
                  color: "#dc3545",
                  padding: "10px",
                  my: 0,
                  py: 0,
                }}
              >
                {formik.errors.password}
              </Box>
            ) : (
              ""
            )}
          </Box>

          <Typography
            onClick={() => {
              navigate("/register");
            }}
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              width: "30%",
            }}
          >
            Create account
          </Typography>
          <Button
            sx={{
              boxShadow: " 0px 0px 8.4px 1px #ECBC56",
              backgroundColor: " #C3AD57",
              color: "#fff",
              width: "150px",
              ml: "auto",
              borderRadius: "5px",
              height: "40px",
            }}
            type="submit"
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
