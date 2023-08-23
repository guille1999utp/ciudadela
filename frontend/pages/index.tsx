import Header from '@/src/components/Header';
import { Box, Container, Grid,  } from '@material-ui/core';
import CardSkyn from '@/src/components/Card';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup } from '@material-ui/core';
import { CardSkynProps } from '@/interfaces/card';
import { useState,useEffect } from 'react'
import axios from 'axios'
import Pagination from '@/src/components/Pagination';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

interface propsResponse {
  info?: {
      count?:number;
      next?:string;
      pages?: number;
      prev?:string;
  };
  results?: CardSkynProps[];
}

export default function Home() {

  const classes = useStyles();

  const [characters, setCharacters] = useState<propsResponse>({});
  const [page, setPage] = useState(1);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/get-characters?page=${page}`);
      setCharacters(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  useEffect(() => {
    fetchCharacters()
  }, [page])

  const handleNextPage = () => {
    if(characters.info?.next){
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if(characters.info?.prev){
      setPage(page - 1);
    }
  };
  
  console.log(page)
  return (
    <Box>
      <Header />

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {characters.results?.map((Character, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <CardSkyn
                id={Character.id}
                name={Character.name}
                image={Character.image}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination onNext={handleNextPage} onPrev={handlePrevPage} />
      </Container>
      
    </Box>
  )
}
