import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/styles";

const Login = (props: LoginProps) => {
  const classes = useStyles();

  if (props.isLoginVisible) {
    return (
      <Grid>
        <Paper elevation={10} className={classes.card}>
          <Grid alignItems="center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className={classes.typography} variant="h5">
              Ingresar
            </Typography>
          </Grid>
          <TextField
            id="username"
            label="Nombre de usuario"
            placeholder="Ingrese su usuario"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Contraseña"
            placeholder="Ingrese su contraseña"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <FormControlLabel
            control={
              <Checkbox id="rememberMe" name="rememberMe" color="primary" />
            }
            label="Recuérdame"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.btn}
            fullWidth
            onClick={() => props.onLoginClick(true)}
          >
            Ingresar
          </Button>
          <Typography>
            <Link href="#" variant="subtitle1">
              Olvidé mi contraseña
            </Link>
          </Typography>
          <Typography>
            Aún no tienes cuenta?
            <Link href="#" variant="subtitle2">
              {" "}
              Regístrate!
            </Link>
          </Typography>
        </Paper>
      </Grid>
    );
  } else return <div></div>;
};

type LoginProps = {
  isLoginVisible: boolean;
  onLoginClick: (isProfileVisible: boolean) => void;
};

const useStyles = makeStyles({
  card: {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "#05b0a7",
    margin: "20px auto",
  },
  typography: {
    margin: "0 80px",
  },
  btn: {
    margin: "8px 0",
  },
});

export default Login;
