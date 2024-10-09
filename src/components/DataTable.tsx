import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useCallback } from 'react';

type DataTableColumnConfig<T> = {
  title: string;
  render: (row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  columnConfig: DataTableColumnConfig<T>[];
  isLoading: boolean;
  page?: number;
  rows: T[] | undefined;
  setPage?: (updatePage: number) => void;
  title: string;
  totalRowsCount: number | undefined;
};

export const DataTable = <T,>({
  columnConfig,
  isLoading,
  page,
  rows,
  setPage,
  title,
  totalRowsCount,
}: DataTableProps<T>) => {
  const handleChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      if (setPage) {
        setPage(value);
      }
    },
    [setPage]
  );

  return (
    <Stack gap={3}>
      <TableContainer component={Paper}>
        <Box pl={2} pt={2}>
          <Typography align="left" variant="h6">
            {title}
          </Typography>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {columnConfig.map(({ title: columnTitle }) => (
                <TableCell key={columnTitle}>{columnTitle}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={columnConfig.length}>
                  <Box display="flex" justifyContent="center" p={1}>
                    <CircularProgress />
                  </Box>
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              rows &&
              rows.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  {columnConfig.map(({ title: columnTitle, render }) => (
                    <TableCell key={columnTitle}>{render(row)}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {setPage && !isLoading && (
        <Pagination
          count={Math.ceil((totalRowsCount ?? 0) / 20)}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      )}
    </Stack>
  );
};
