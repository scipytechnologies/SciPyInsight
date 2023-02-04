import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography'
import { Button, Grid, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

function Teachers() {

  const navigate = useNavigate()

  const breadcrumbs = [
    { label: 'Home', to: '/admin/home' },
    { label: 'Teachers' },
  ];


  // modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#fff',
    // boxShadow: 50,
    pt: 2,
    px: 4,
    pb: 3,
  };


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  // mock data
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
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
          navigate('sfd')
        };
  
        return <Button variant='outlined' onClick={onClick} size="small" >More</Button>;
      },
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: 'Eros', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link color="inherit" href={breadcrumb.to} key={index} underline="hover">
            <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
          </Link>
        ))}
      </Breadcrumbs>

      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Container>
          <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <Typography variant="h4" color="initial">
              Teachers
            </Typography>

          </Stack>

          {/* data grid table for batches */}
          <Box sx={{ flexGrow: 1, mt: 2, height: 450, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={7}
            />
          </Box>
        </Container>
      </Box>


      {/* modal */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container sx={style}>
          <Stack direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
            <Typography variant="h6" color="initial">
              Batch Details
            </Typography>

            <Button variant='contained' color='primary'>Save</Button>
          </Stack>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  size='small'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size='small'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size='small'
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
    </div>
  )
}

export default Teachers