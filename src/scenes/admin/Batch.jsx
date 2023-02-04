import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import Switch from '@mui/material/Switch';


function Batch() {

  const { batches } = useParams()
  console.log(batches)

  const breadcrumbs = [
    { label: 'Home', to: '/admin/home' },
    { label: 'Batches', to: '/admin/batches' },
    { label: 'Batch Details', currentPage: 'page' },
  ];

  // handling menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // student listing state
  const [listStudents, setListStudents] = React.useState(false);
  const handleListStudents = () => {
    setListStudents(true)
    handleClose()
  }

  // data of waiting students
  const columns = [
    { field: 'id', headerName: 'Batch-ID', width: 120 },
    { field: 'studentName', headerName: 'Student name', width: 200 },
    { field: 'courseName', headerName: 'Course name', width: 200 },


    {
      field: 'action',
      headerName: 'Action',
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

        return <Button variant='outlined' onClick={onClick} size="small" >Add</Button>;
      },
    },
  ];

  const rows = [
    { id: '01', courseName: 'Python', studentName: 'Rahul' },
    { id: '02', courseName: 'Mern Stack', studentName: 'Deepak' },
    { id: '03', courseName: 'Python', studentName: 'vineeth' },
    { id: '04', courseName: 'Mern Stack', studentName: 'Imran' },
  ];



  // data of exissting students in the batch
  const Oldcolumns = [
    { field: 'id', headerName: 'Batch-ID', width: 120 },
    { field: 'studentName', headerName: 'Student name', width: 200 },
    { field: 'attendence', headerName: 'Attendence', width: 100 },
    {
      field: 'pdf',
      headerName: 'Pdf Subscribtion',
      width: 150,
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

        return <Switch
          inputProps={{ 'aria-label': 'controlled' }}
          size="small"
        />;
      },
    },

    {
      field: 'action',
      headerName: 'Action',
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

        return <Button variant='outlined' onClick={onClick} size="small" color='error'>Remove</Button>;
      },
    },
  ];

  const Oldrows = [
    { id: '01', studentName: 'Karan', attendence: '90%' },
    { id: '02', studentName: 'Shiva', attendence: '90%' },
    { id: '03', studentName: 'Manu', attendence: '90%' },
    { id: '04', studentName: 'Vishva', attendence: '90%' },
    { id: '05', studentName: 'Renju', attendence: '90%' },
    { id: '06', studentName: 'Dileep', attendence: '90%' },
    { id: '07', studentName: 'Suman', attendence: '90%' },
  ];



  return (

    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link color="inherit" href={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
            <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
          </Link>
        ))}
      </Breadcrumbs>


      <Container>
        <Stack direction="row" justifyContent="space-between" sx={{ borderBottom: `1px solid lightgrey`, pb: 1, mt: 2 }}>
          <Box>
            <Typography variant="h5" color="secondary">Artificial Intellegence Python</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ minWidth: '25rem' }}>
              <Typography variant='caption' color="secondary">batch Id: 01PY01</Typography>
              <Typography variant='caption' color="secondary">Assigned Teacher: John Doe</Typography>
              <Typography variant='caption' color="secondary">Duration: 90hrs</Typography>
            </Stack>
          </Box>

          <Box>
            <IconButton aria-label="delete" size="small" onClick={handleClick}>
              <SettingsIcon fontSize="inherit" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleListStudents} sx={{ fontSize: '13px' }}>Recruit Students</MenuItem>
              <MenuItem onClick={handleClose} sx={{ fontSize: '13px' }}>Edit Batch</MenuItem>
              <MenuItem onClick={handleClose} sx={{ fontSize: '13px', color: 'red' }}>Delete Batch</MenuItem>
            </Menu>
          </Box>
        </Stack>


        {/* listing waiting students to join in courses */}
        {
          listStudents ?
            <>
              <Box sx={{ flexGrow: 1, mt: 2, height: 400, width: '100%' }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="initial">Students in Waiting List</Typography>
                  <IconButton aria-label="delete" size="small" onClick={() => { setListStudents(false) }}>
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={7}
                />
              </Box>
            </>
            :
            <>
              <Box sx={{ flexGrow: 1, mt: 2, height: 400, width: '100%' }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="caption" color="initial">Existing Students</Typography>
                </Stack>
                <DataGrid
                  rows={Oldrows}
                  columns={Oldcolumns}
                  pageSize={7}
                />
              </Box>
            </>
        }
      </Container>
    </>
  )
}

export default Batch