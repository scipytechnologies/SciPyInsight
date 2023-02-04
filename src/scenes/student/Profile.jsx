import { Avatar, Box, Breadcrumbs, Button, Card, Container, Grid, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, SliderTrack, Stack, Typography } from '@mui/material';
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Profile() {
  const [editable, setEditable] = useState(false)
  const editHandle = () => {
    alert('clicked')
  }

  const breadcrumbs = [
    { label: 'Home', to: '/student/home' },
    { label: 'Profile', to: '/student/profile' }
  ];


  const profileDetails = [
    { field: 'Name', value: 'John Doe' },
    { field: 'Semester', value: 's6' },
    { field: 'Batch', value: 'Batch 01' },
    { field: 'Assigned Teacher', value: 'Anus' }
  ]


  const accountDetails = [
    { field: 'Email', value: 'johnDoe@gmail.com' },
    { field: 'Phone', value: '+91 812902192' },
    { field: 'Batch', value: 'Batch 01' },
    { field: 'Assigned Teacher', value: 'Anus' }
  ]

  return (
    <div>
      <Container>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs.map((breadcrumb, index) => (
            <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
              <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
            </Link>
          ))}
        </Breadcrumbs>


        <Grid container sx={{ width: '95vw' }} spacing={3}>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ borderBottom: `1px solid lightgrey`, pb: 1, mt: 1 }} s>
              <Box>
                <Typography variant="h6" color="secondary">Account Details</Typography>
              </Box>

              <Box>
                <Button variant="outlined" color="primary" size='small' onClick={editHandle}>Edit Profile</Button>
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 1, borderRadius: '1rem', minHeight: '25vh' }}>
              <Container>
                <Stack direction="column" justifyContent="space-between" xs={12}>
                  <List sx={{ width: '100%' }} subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Profile details
                    </ListSubheader>
                  }>
                    {
                      profileDetails.map((index, val) => {
                        return (
                          <ListItem key={val} sx={{ marginBottom: -1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                              <Typography variant="caption" color="secondary">{index.field}</Typography>
                              <Typography variant="caption" color="initial">{index.value}</Typography>
                            </Stack>
                          </ListItem>
                        )
                      })
                    }

                  </List>
                </Stack>
              </Container>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 1, borderRadius: '1rem', minHeight: '25vh' }}>
              <Stack direction="row" justifyContent="space-between" xs={12}>
                <Container>
                  <Stack direction="column" justifyContent="space-between" xs={12}>
                    <List sx={{ width: '100%', p: 0 }} subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Account Settings
                      </ListSubheader>
                    }>
                      {
                        accountDetails.map((index, val) => {
                          return (
                            <ListItem key={val} sx={{ marginBottom: -1 }}>
                              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
                                <Typography variant="caption" color="secondary">{index.field}</Typography>
                                <Typography variant="caption" color="initial">{index.value}</Typography>
                              </Stack>
                            </ListItem>
                          )
                        })
                      }
                    </List>
                  </Stack>
                </Container>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 1, borderRadius: '1rem', minHeight: '40vh' }}>
              <Stack direction="row" justifyContent="space-between" xs={12}>
                <Box >
                  <Typography variant="caption" color="secondary">
                    ==  Learning Statics ==
                  </Typography>
                </Box>

                <Box>

                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default Profile