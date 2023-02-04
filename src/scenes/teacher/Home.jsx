import { Box } from '@mui/system'
import React from 'react'
import Navbar from './NavBar'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom'

function Home() {

  const batches = [
    {
      id: 31202,
      course: 'Python',
      students: 15
    },
    {
      id: 31201,
      course: "MERN stack",
      students: 20
    },
    {
      id: 29128,
      course: 'Python',
      students: 10
    },
    {
      id: 31201,
      course: "MERN stack",
      students: 30
    },
    {
      id: 31202,
      course: 'Python',
      students: 15
    },
    {
      id: 31201,
      course: "MERN stack",
      students: 20
    },
  ]

  const navigate = useNavigate()

  const breadcrumbs = [
    { label: 'Home', to: '/teacher' }
  ];


  return (
    <Box>
      <Navbar />
      <Container>
        <div style={{ marginTop: '-2rem', marginBottom: '.3rem' }}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => (
              <Link color="inherit" to={breadcrumb.to} key={index} underline="hover">
                <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
              </Link>
            ))}
          </Breadcrumbs>
        </div>
        <Typography variant="h4" color="secondary">
          My Batches
        </Typography>

        {(batches.length === 0) && <Typography variant='subtitle1'>No Batches Assigned for You</Typography>}

        <Box sx={{ mt: 2, width: '100%' }}>
          <Grid container sx={{ xs: 12, sm: 6, lg: 4 }} spacing={8} >
            {
              batches.map((index) => {
                return (
                  <Grid item >
                    <Box sx={{ minWidth: 230, minHeight: 180, p: 2, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                      <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mb: 1 }}>
                        <Typography variant="body2" color="primary">Batch Id : {index.id}</Typography>
                      </Stack>
                      <Stack direction="column" justifyContent="center" spacing={2}>
                        <div style={{ backgroundColor: '#1976d222' }}> <Typography variant="h4" color="secondary">{index.course}</Typography></div>
                        <Typography variant="body2" color="initial">Active Students: {index.students}</Typography>
                        <Button variant='outlined' size='small' onClick={() => navigate('/teacher/batches')}>Enter</Button>
                      </Stack>
                    </Box>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </Container>
    </Box >
  )
}

export default Home