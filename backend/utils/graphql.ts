import { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } from 'graphql';
import axios from 'axios';
import { Character } from './../interfaces/characters';

const PageInfoType = new GraphQLObjectType({
    name: 'PageInfo',
    fields: {
      count: { type: GraphQLInt },
      pages: { type: GraphQLInt },
      next: { type: GraphQLString },
      prev: { type: GraphQLString },
    },
  });

  const CharacterResultType = new GraphQLObjectType({
    name: 'CharacterResult',
    fields: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      species: { type: GraphQLString },
      image: { type: GraphQLString },
    },
  });

  const CharactersType = new GraphQLObjectType({
    name: 'Characters',
    fields: {
      info: { type: PageInfoType },
      results: { type: new GraphQLList(CharacterResultType) }, 
    },
  });
  

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    characters: {
        type: CharactersType,
        args: {
          page: { type: GraphQLInt },
          filter: { type: GraphQLString },
        },
        async resolve(parent, args) {
          const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
            params: {
              page: args.page || 1,
              species: args.filter || '',
            },
          });

          const humanCharacters = response.data.results.filter((character: Character) => character.species === 'Human');

          return {
            info: response.data.info,
            results: humanCharacters,
          };
        },
      },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;