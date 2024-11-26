/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import { Box, Button, TextField, Typography } from "@mui/material";
import registerLogo from "../assets/register_img.png";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useContext} from "react"
import { DarkModeContext } from "./context/Context";

function Login() {
ي
  let [err, setErr] = useState(false);
  let {baseUrl}=useContext(DarkModeContext)
  let navigate = useNavigate();
  async function signIn(values) {
    try {
      let res = await axios.post(
        `${baseUrl}/login`,
        values
      );
      if (res?.data?.status === true) {
        localStorage.setItem("token", res?.data?.token);
        navigate("/home");
      }

      console.log(res)
    } catch (err) {
      const errorMessage =
        err?.response?.data?.message?.email?.[0] ||
        "Invalid login credentials.";
      setErr(errorMessage);
    }

  
  }

  let validationSchema = Yup.object({
    email: Yup.string().required("email is required"),

    password: Yup.string()
      .required("password is required")
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

              slotProps={{
                input:{
                  style:{
                    color:"#fff"
                  }
                }
              }}
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
              slotProps={{
                input:{
                  style:{
                    color:"#fff"
                  }
                }
              }}
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

          <Link
            to="https://www.hfssociety.com"
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              width: "30%",
              color: "#fff",
            }}
          >
            Create account
          </Link>
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

          onClick={()=>{
            navigate('/home')
          }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
