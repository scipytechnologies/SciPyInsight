import { Box, Container, Stack } from '@mui/system'
import * as React from 'react';
import NavBar from './NavBar'
import Typography from '@mui/material/Typography'
import { Breadcrumbs, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Batches() {
   const breadcrumbs = [
      { label: 'Home', to: '/teacher' },
      { label: 'Courses' }
   ];

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

   // modal controllers

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

   // date controllers in modal
   const date = Date.now()
   const [from, setFrom] = React.useState(dayjs(date));
   const [to, setTo] = React.useState(dayjs(date));

   const handleChangeTo = (newValue) => {
      setTo(newValue);
   };

   const handleChangeFrom = (newValue) => {
      setFrom(newValue);
   };

   // file upload
   const [pdf, setPdf] = React.useState()
   const handleFileUpload = (e) => {
      setPdf(e.target.value)
   }


   return (
      <Box>
         <NavBar />
         <Container>
            <div style={{ marginTop: '-2.2rem', marginBottom: '.5rem' }}>
               <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs.map((breadcrumb, index) => (
                     <Link color="inherit" to={breadcrumb.to} key={index} underline="hover">
                        <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
                     </Link>
                  ))}
               </Breadcrumbs>
            </div>
            <Stack direction="row" justifyContent="space-between">
               <Box>
                  <Typography variant="h5" color="initial">
                     Batch Name
                  </Typography>

                  <Typography variant="body2" color="secondary">
                     Batch Id : 310292
                  </Typography>
               </Box>

               <Stack>
                  <Button variant="contained" onClick={handleOpen}>Schedule Class</Button>
               </Stack>
            </Stack>

            <Box sx={{ flexGrow: 1, mt: 2, height: 450, width: '100%' }}>
               <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={7}
               />
            </Box>
         </Container>

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
                     Schedule Class
                  </Typography>
               </Stack>
               <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <TimePicker
                              label="From"
                              value={from}
                              onChange={handleChangeFrom}
                              renderInput={(params) => <TextField size="small" {...params} />}
                           />
                        </LocalizationProvider>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                           <TimePicker
                              label="To"
                              onChange={handleChangeTo}
                              renderInput={(params) => <TextField size="small" sx={{ fontSize: '12px' }} {...params} />}
                           />
                        </LocalizationProvider>
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           required
                           fullWidth
                           id="topics"
                           label="Topics"
                           name="topics"
                           size='small'
                        />
                     </Grid>
                     <Grid item xs={12}>

                        <Stack direction="row"
                           justifyContent="space-between"
                           alignItems="center"
                           spacing={2}>


                           <Button
                              variant="outlined"
                              component="label"
                           >
                              Upload Notes
                              <input
                                 type="file"
                                 hidden
                                 multiple
                                 onChange={handleFileUpload}
                              />
                           </Button>

                           <Button variant='contained' color='primary'>Save</Button>
                        </Stack>
                     </Grid>
                  </Grid>
               </Box>
            </Container>
         </Modal>
      </Box >
   )
}

export default Batches