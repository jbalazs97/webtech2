import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Alert } from "@material-ui/lab";
import { register } from "./services/users";

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

export default function Register() {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [isPwdsMatch, setIsPwdsMatch] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerButtonHandle = (user) => {
    if (
      user.username === undefined &&
      user.password === undefined &&
      user.confirmPassword === undefined
    ) {
      setIsError(true);
    }
    if (user.password !== user.confirmPassword) {
      setIsPwdsMatch(true);
    }
    if (user.password === user.confirmPassword && user.username !== undefined) {
      register(user.username, user.password);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            autoComplete="new-password"
          />
          <div>
            {isError && (
              <Alert severity="error">Please enter Username and Password</Alert>
            )}
          </div>
          <div>
            {isPwdsMatch && (
              <Alert severity="error">
                The Passwords you entered did not match
              </Alert>
            )}
          </div>
          <Button
            style={{ marginTop: "1rem" }}
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={(e) => {
              e.preventDefault();
              registerButtonHandle(user);
            }}
          >
            Register
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => {
              window.location.href = "/login";
            }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
