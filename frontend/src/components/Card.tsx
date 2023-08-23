import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import { CardSkynProps } from '@/interfaces/card';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
  
  const CardSkyn: React.FC<CardSkynProps> = ({ name, description, id, image }) => {
  
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={image}  />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardSkyn;