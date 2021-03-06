import * as React from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { useAppSelector } from "../../store";
import { useState } from "react";
import { LoginStyle } from "./LoginStyle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const Login = ({ setIsLogged }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const userData = useAppSelector((state) => state.user.data);

  const handleLoginFieldChange = (event) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    const findUser = userData.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );
    if (formData.email === "" || formData.password === "") {
      alert("Email or password field cannot be empty.");
    } else {
      if (findUser) {
        setIsLogged(true);
      } else {
        alert("Invalid email or password");
      }
    }
  };
  
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={LoginStyle.main}>
      <Box sx={LoginStyle.container}>
        <Box>
          <AccountCircle color="primary" sx={LoginStyle.icon} />
        </Box>
        <TextField
          sx={LoginStyle.textField}
          id="outlined-basic"
          required
          fullWidth
          name="email"
          onChange={handleLoginFieldChange}
          label="E-mail"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          sx={LoginStyle.textField}
          id="outlined-basic"
          required
          name="password"
          onChange={handleLoginFieldChange}
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePasswordClick}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={handleLogin} variant="contained">
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
