import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const WelcomeCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="random img"
          height="140"
          image="https://picsum.photos/200/300"
          title="random img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Mi Salud
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bienvenido a su app de Mi Salud, donde usted podrá auto gestionarse
            para agendar turnos, ver resultados de exámenes, conversar con su
            médico y muchas cosas más!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="text" color="primary">
          COVID-19
        </Button>
        <Button variant="text" color="primary">
          Ayuda
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  },
});
export default WelcomeCard;
