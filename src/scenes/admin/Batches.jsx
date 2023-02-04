import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/system';
import Typography from '@mui/material/Typography'
import { Button, Grid, InputLabel, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Batches() {

  const navigate = useNavigate()

  const breadcrumbs = [
    { label: 'Home', to: '/admin/home' },
    { label: 'Batches' },
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

  const [teacher, setTeacher] = React.useState('');

  const handleChange = (event) => {
    setTeacher(event.target.value);
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
    { field: 'id', headerName: 'Batch-ID', width: 120 },
    { field: 'batch', headerName: 'Batch name', width: 150 },
    { field: 'courseName', headerName: 'Course name', width: 200 },
    { field: 'duration', headerName: 'Duration', width: 150 },
    { field: 'noStudents', headerName: 'Students', width: 80 },
    { field: 'teacher', headerName: 'Assigned Teacher', width: 200 },

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
    { id: '01A1', courseName: 'Python', batch: 'Batch 1', noStudents: 15, duration: '90 hours', teacher: 'John Doe' },
    { id: '01A2', courseName: 'Mern Stack', batch: 'Batch 2', noStudents: 20, duration: '120 hours', teacher: 'Elizabeth' },
    { id: '01A3', courseName: 'Python', batch: 'Batch 3', noStudents: 30, duration: '120 hours', teacher: 'John Doe' },
    { id: '01A4', courseName: 'Mern Stack', batch: 'Batch 4', noStudents: 16, duration: '90 hours', teacher: 'David' },
  ];

  const placeholderStyle = {
    '& .MuiFormLabel-root': {
      fontSize: '14px',
    }
  }



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
              Batches
            </Typography>

            <Button variant='outlined' color='primary' onClick={handleOpen}>Create Batch</Button>
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
                  name="batchName"
                  required
                  fullWidth
                  id="batchName"
                  label="Batch Name"
                  autoFocus
                  size='small'
                  sx={placeholderStyle}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="batchId"
                  label="Batch Id"
                  name="batchId"
                  size='small'
                  sx={placeholderStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="courseName"
                  label="Course Name"
                  name="courseName"
                  size='small'
                  sx={placeholderStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="duration"
                  label="Course Duration"
                  id="duration"
                  size='small'
                  sx={placeholderStyle}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl size="small" sx={{minWidth: '100%'}}>
                  <InputLabel id="demo-select-small"  sx={{fontSize: '14px'}}>Assign Teacher</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={teacher}
                    label="Assign Teacher"
                    onChange={handleChange}
                  >
                    <MenuItem value="John Doe">John Doe</MenuItem>
                    <MenuItem value="David">David</MenuItem>
                    <MenuItem value="Elizabeth">Elizabeth</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Modal>
    </div>
  )
}

export default Batches