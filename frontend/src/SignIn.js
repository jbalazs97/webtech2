import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import Container from "@material-ui/core/Container";
import { login } from "./services/users";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(0, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [isError, setIsError] = useState(false);

  const signInButtonHandle = (user) => {
    login(user.username, user.password);
    // after pressed sign in the app will automaticly login, if not it means there is some error
    setTimeout(function () {
      setIsError(true);
    }, 500);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
            autoComplete="new-password"
          />
          <div>
            {isError && (
              <Alert severity="error">
                Login failed - Username or Password didn't match
              </Alert>
            )}
          </div>
          <Button
            style={{ marginTop: "1rem" }}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => {
              e.preventDefault();
              signInButtonHandle(user);
            }}
          >
            Sign In
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={(e) => {
              window.location.href = "/register";
            }}
          >
            Register
          </Button>
        </form>
      </div>
    </Container>
  );
}
