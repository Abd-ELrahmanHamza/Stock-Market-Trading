import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { setUserUtil } from "../../../application/utils/user";
import User from "../../../domain/entities/user";
import { useNavigate } from "react-router-dom";

const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export default function SignInSide() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user: User = {
      name: data.get("username") as string,
      role: data.get("role") === "admin" ? "admin" : "investor",
      money: 0,
      stocks: [],
      profit: {},
      stocksCount: 0,
    };
    setUserUtil(user);
    if (user.role === "investor") navigate("/investor");
    else navigate("/admin");
  };
  const [role, setRole] = React.useState("investor");

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <StyledFormControl>
              <InputLabel htmlFor="role-select">Select Role</InputLabel>
              <Select
                value={role}
                onChange={handleChange}
                label="Select Role"
                name="role"
                inputProps={{
                  name: "role",
                  id: "role-select",
                }}
              >
                <MenuItem value="investor">Investor</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </StyledFormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
