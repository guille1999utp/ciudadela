import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../utils/graphql';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  );

  app.use(cors());

  app.get('/get-characters', async (req, res) => {
    try {

      const { page = 1} = req.query; 

      const graphqlResponse = await axios.post('http://localhost:4000/graphql', {
        query: `
          query {
            characters(page: ${page}, filter: "human") {
              info {
                count,
                pages,
                next,
                prev
              }
              results {
                id,
                name,
                species,
                image
              }
            }
          }
        `,
      });
      
      const charactersData = graphqlResponse.data.data.characters;
      res.status(200).json(charactersData);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los personajes' });
    }
  });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});