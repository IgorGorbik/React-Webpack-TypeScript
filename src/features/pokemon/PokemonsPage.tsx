import { useState } from 'react';
import { DataTable } from 'components/DataTable';
import { useGetPokemonsQuery } from './pokemonService';

const defaultLimit = 20;

export const PokemonsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isFetching } = useGetPokemonsQuery({
    limit: defaultLimit,
    offset: (page - 1) * defaultLimit,
  });

  return (
    <DataTable
      title="Pokemons"
      columnConfig={[
        { title: 'ID', render: (row) => row.url.split('/').at(-2) },
        { title: 'Name', render: (row) => row.name },
      ]}
      rows={data?.results}
      totalRowsCount={data?.count}
      page={page}
      setPage={setPage}
      isLoading={isFetching}
    />
  );
};
