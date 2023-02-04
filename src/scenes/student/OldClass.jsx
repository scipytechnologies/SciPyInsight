import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Button } from '@mui/material';



const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

// table demo data
const columns = [
  { field: 'id', headerName: 'Session', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 130,
  },
  {
    field: 'topic',
    headerName: 'Topic',
    width: 150,
  },
  {
    field: 'tutorial',
    headerName: 'Tutorial',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        console.log(JSON.stringify(thisRow, null, 4));
      };

      return <Button variant='outlined' size="small" color="info" >Tutorial</Button>;
    },
  },
  {
    field: 'notes',
    headerName: 'Notes',
    sortable: false,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== '__check__' && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field)),
          );

        console.log(JSON.stringify(thisRow, null, 4));
      };

      return <Button variant='outlined' size="small" color="warning">View Note</Button>;
    },
  },
];

const rows = [
  { id: 1, date: '01-Jan-2023', topic: 'Python' },
  { id: 2, date: '02-Jan-2023', topic: 'Python' },
  { id: 3, date: '03-Jan-2023', topic: 'Python' },
  { id: 4, date: '04-Jan-2023', topic: 'Python' },
  { id: 5, date: '05-Jan-2023', topic: 'Python' },
  { id: 6, date: '06-Jan-2023', topic: 'Python' },
  { id: 7, date: '07-Jan-2023', topic: 'Python' },
  { id: 8, date: '08-Jan-2023', topic: 'Python' },
  { id: 9, date: '09-Jan-2023', topic: 'Python' },
];

export default function AntDesignGrid() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StyledDataGrid
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Pagination: CustomPagination,
        }}
        columns={columns}
        rows={rows}
      />
    </div>
  );
}