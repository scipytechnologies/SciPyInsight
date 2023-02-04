import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import batchImg from './images/batch.png'
import teacherImg from './images/teacher.png'
import studentImg from './images/student.png'



function Home() {
  const breadcrumbs = [
    { label: 'Home', to: '/admin/home' }
  ]

  const cards = [
    {
      title: 'Batches',
      no: '10',
      img: batchImg,
      link: '/admin/batches'
    },
    {
      title: 'Teachers',
      no: '3',
      img: teacherImg,
      link: '/admin/teachers'
    },
    {
      title: 'Students',
      no: '60',
      img: studentImg,
      link: '/admin/students'
    }
  ]

  const navigate = useNavigate()
  return (
    <div style={{ marginTop: '10px' }}>

      {/* <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <Link color="inherit" to={breadcrumb.to} key={index} underline="hover">
            <p style={{ fontSize: '13px' }}>{breadcrumb.label}</p>
          </Link>
        ))}
      </Breadcrumbs> */}

      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1" color="secondary">Admin Pannel</Typography>
            </Box>
          </Grid>

          {
            cards.map((i, val) => {
              return (
                <Grid item xs={12} sm={4} key={val} sx={{ mt: 2 }}>
                  <Card sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
                    <CardActionArea onClick={() => { navigate(i.link) }}>
                      <CardMedia
                        component="img"
                        height="100"
                        width="200"
                        image={i.img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="body1" color="secondary">
                            {i.title}
                          </Typography>
                          <Typography variant="body1" color="secondary">
                            {i.no}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              )
            })
          }

          <Grid item xs={12}>
            <Card sx={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
              <Box sx={{ p: 2 }}>
                <Typography variant="body1" color="secondary" sx={{ mb: 2 }}>Create Notification</Typography>

                <Grid spacing={3} alignItems="center" justifyContent="space-between">
                  <TextField
                    label="Event"
                    size="small"
                    xs={12} md={6} lg={4}
                    sx={{ mr: 2, mb: 2 }}
                    InputProps={{ style: { fontSize: "13px" } }}
                  />
                  <TextField
                    xs={12} md={6} lg={4}
                    label="Event Date and Time"
                    size="small"
                    sx={{ mr: 2, mb: 2 }}
                    InputProps={{ style: { fontSize: "13px" } }}
                  />
                  <TextField
                    label="Event"
                    size="small"
                    sx={{ mr: 2, mb: 2 }}
                    InputProps={{ style: { fontSize: "13px" } }}
                  />
                  <TextField
                    xs={12} md={6} lg={4}
                    label="Location"
                    size="small"
                    sx={{ mr: 2, mb: 2 }}
                    InputProps={{ style: { fontSize: "13px" } }}
                  />
                  <TextField
                    xs={12} md={12} lg={12}
                    label="Description"
                    size="small"
                    sx={{ mr: 2, mb: 2 }}
                    InputProps={{ style: { fontSize: "13px" } }}
                  />
                  <Button xs={4} variant="contained">Upload</Button>
                </Grid>
              </Box>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </div >
  )
}

export default Home