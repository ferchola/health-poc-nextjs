import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import { deepOrange } from "@material-ui/core/colors";

const Profile = (props: ProfileProps) => {
  const classes = useStyles();

  if (props.isProfileVisible) {
    return (
      <Grid>
        <Paper elevation={10} className={classes.card}>
          <Avatar className={classes.avatar} sx={{ bgcolor: deepOrange[500] }}>
            FF
          </Avatar>
          <Typography className={classes.typography} variant="h4">
            Fer F
          </Typography>
          <Typography className={classes.typography} variant="h5">
            Cobertura: Consalud
          </Typography>
          <Typography className={classes.typography} variant="h5">
            Tel de contacto: +56 9 xxxx xxxx
          </Typography>

          <Button
            type="submit"
            variant="contained"
            color="success"
            className={classes.btn}
            fullWidth
          >
            Actualizar mis datos
          </Button>
        </Paper>
      </Grid>
    );
  } else return <div></div>;
};

const useStyles = makeStyles({
  card: {
    padding: 10,
    height: "30vh",
    width: 500,
    margin: "20px auto",
  },
  avatar: {
    margin: "20px auto",
  },
  typography: {
    margin: "0 80px",
  },
  btn: {
    margin: "8px 0",
  },
});

type ProfileProps = {
  isProfileVisible: boolean;
};
export default Profile;
