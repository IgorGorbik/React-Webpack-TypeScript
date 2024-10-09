import { restApi } from 'app/store/restApi';

type PokemonsList = { count: number; next: string; results: { name: string; url: string }[] };
type PokemonsListQuery = { limit: number; offset: number };

const pokemonApi = restApi.enhanceEndpoints({ addTagTypes: ['Pokemons'] }).injectEndpoints({
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonsList, PokemonsListQuery>({
      query: (params) => ({
        method: 'GET',
        url: `https://pokeapi.co/api/v2/ability`,
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ name: id }) => ({ type: 'Pokemons', id }) as const),
              { type: 'Pokemons', id: 'LIST' },
            ]
          : [{ type: 'Pokemons', id: 'LIST' }],
    }),
  }),
});
export const { useGetPokemonsQuery } = pokemonApi;
