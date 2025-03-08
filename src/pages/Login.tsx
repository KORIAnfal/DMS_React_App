import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { CssVarsProvider, extendTheme, useColorScheme } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Checkbox from "@mui/joy/Checkbox";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import GoogleIcon from "../assets/icons/GoogleIcon";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  persistent: HTMLInputElement;
}

interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (email === "admin@dmsgo.com" && password === "123") {
      navigate("/dashboard"); 
    } else {
      alert("Invalid login credentials!");
    }
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ":root": {
            "--Form-maxWidth": "800px",
            "--Transition-duration": "0.4s", 
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: "100%", md: "50vw" },
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(12px)",
          backgroundColor: "rgba(255 255 255 / 0.2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{ py: 3, display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
              <Typography level="title-lg">DMS Go</Typography>
            </Box>
            
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 600,
              height: 600,
              maxWidth: "90%",
              minHeight: "80vh",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: "hidden",
              },
            }}
          >
            <Stack sx={{ gap: 5, mb: 3 }}>
              <Stack sx={{ gap: 1.5 }}>
                <Typography component="h1" level="h1">
                  Log in
                </Typography>
                <Typography level="body-md">
                  New to company?{" "}
                  <Link href="#replace-with-a-link" level="title-md">
                    Sign up!
                  </Link>
                </Typography>
              </Stack>
            </Stack>

            <Stack sx={{ gap: 5, mt: 3 }}>
              <form
                onSubmit={handleSubmit}
              >
                <FormControl required>
                  <FormLabel sx={{ fontSize: "1.2rem" }}>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ height: 60, fontSize: "1.8rem", padding: "15px" }}
                  />
                </FormControl >
                <FormControl required>
                  <FormLabel sx={{ fontSize: "1.2rem" }}>Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ height: 60, fontSize: "1.8rem", padding: "15px" }}
                  />
                </FormControl>
                <Stack sx={{ gap: 5, mt: 3 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      size="sm"
                      label="Remember me"
                      name="persistent"
                      sx={{ fontSize: "1.2rem" }}
                    />
                    <Link level="title-md" href="#replace-with-a-link">
                      Forgot your password?
                    </Link>
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    sx={{ height: 55, fontSize: "1.1rem", fontWeight: "bold" }}
                  >
                    Log in
                  </Button>
                  <Divider
                    sx={(theme) => ({
                      [theme.getColorSchemeSelector("light")]: {
                        color: { xs: "#FFF", md: "text.tertiary" },
                        fontSize: "1.2rem"
                      },
                    })}
                   >
                    or
                  </Divider>
                  <Button
                    variant="soft"
                    color="neutral"
                    fullWidth
                    sx={{ height: 55, fontSize: "1.1rem", fontWeight: "bold" }}
                    startDecorator={<GoogleIcon />}
                  >
                    Continue with Google
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: "50vw" },
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)",
          },
        })}
      />
    </CssVarsProvider>
  );
}
