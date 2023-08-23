import Header from '@/src/components/Header';
import { Box, Container, Grid,  } from '@material-ui/core';
import CardSkyn from '@/src/components/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardSkynProps } from '@/interfaces/card';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function Home() {

  const classes = useStyles();

  const ListCharacter : CardSkynProps[] = [{
    name:"rick",
    description:"rick es cacorro como julian pa",
    id:345,
    image:"https://elcomercio.pe/resizer/yHlVmeje9JdLEROBvNgsdoVpwRs=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg"
  },{
    name:"rick",
    description:"rick es cacorro como julian pa",
    id:345,
    image:"https://elcomercio.pe/resizer/yHlVmeje9JdLEROBvNgsdoVpwRs=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg"
  },{
    name:"rick",
    description:"rick es cacorro como julian pa",
    id:345,
    image:"https://elcomercio.pe/resizer/yHlVmeje9JdLEROBvNgsdoVpwRs=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KRKOINCP7JGR7KWT4HNBDSJPDA.jpg"
  },]

  return (
    <Box>
      <Header />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {ListCharacter.map((Character, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <CardSkyn
                id={Character.id}
                name={Character.name}
                description={Character.description}
                image={Character.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      
    </Box>
  )
}
