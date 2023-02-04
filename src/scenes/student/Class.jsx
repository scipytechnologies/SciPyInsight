import { Box, Breadcrumbs, Button, ButtonGroup, Card, CardActionArea, CardMedia, Container, Grid, MenuItem, Stack, Typography } from '@mui/material';
import * as React from 'react'
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';
import { maxWidth } from '@mui/system';
import ScheduleTable from './OldClass';   
import { useSelector } from 'react-redux';

function Class() {
   const navigate = useNavigate()

   const breadcrumbs = [
      { label: 'Home', to: '/student/home' },
      { label: 'Class', to: '/student/class' }
   ];

   const [classScheduled, setClassSchedules] = React.useState(true);


   const liveClass = useSelector((state) => state.studentClass.liveClass)
   const previousClass = useSelector((state) => state.studentClass.previousClass)


   // demo classes
   const cardClasses = [
      {
         time: '12:00 PM - 2:00 PM',
         date: '01-02-2023',
         topics: ' AI Introduction, Varaibles'
      },
      {
         time: '12:00 PM - 2:00 PM',
         date: '02-02-2023',
         topics: 'Machine Learning'
      },
      {
         time: '12:00 PM - 2:00 PM',
         date: '03-02-2023',
         topics: 'Natural Language Processing (NLP)'
      },
      {
         time: '12:00 PM - 2:00 PM',
         date: '04-02-2023',
         topics: 'Reinforcement Learning'
      },
      {
         time: '12:00 PM - 2:00 PM',
         date: '05-02-2023',
         topics: 'Generative Models'
      },
      {
         time: '12:00 PM - 2:00 PM',
         date: '06-02-2023',
         topics: 'Artificical Intellgence Advantages and Disadvantages'
      },
   ]

   return (
      <>
         <Container>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
               {breadcrumbs.map((breadcrumb, index) => (
                  <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
                     <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
                  </Link>
               ))}
            </Breadcrumbs>

            <Grid
               container
               spacing={3}
               sx={{ width: '95vw' }}
            >

               <Grid item xs={12}>
                  <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ borderBottom: `1px solid lightgrey`, pb: 1, mt: 1 }}>
                     <Box>
                        <Typography variant="h5" color="secondary">Artificial Intellegence Python</Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ maxWidth: '23rem' }}>
                           <Typography variant='caption' color="secondary">Batch Id: 01PY01</Typography>
                           <Typography variant='caption' color="secondary">Instructor: John Doe</Typography>
                           <Typography variant='caption' color="secondary">Duration: 90hrs</Typography>
                        </Stack>
                     </Box>

                     {/* <Box sx={{position: 'fixed', top: '6rem', right: '1rem'}}>
                        <ButtonGroup
                           disableElevation
                           variant="contained"
                           aria-label="Disabled elevation buttons"
                           size="small"   
                        >
                           <Button>Live Class</Button>
                           <Button>Tutorials</Button>
                        </ButtonGroup>
                     </Box> */}
                  </Stack>
               </Grid>

               {
                  previousClass ?

                     <Grid container item xs={12}>
                        <Card sx={{ height: '100%', width: '100%', pt: 3, boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 12px" }}>
                           <Container>
                              <Typography variant="h6" color="secondary">Tutorials</Typography>
                              <ScheduleTable />
                           </Container>
                        </Card>
                     </Grid>
                     : ''
               }

               {
                  liveClass ?
                     cardClasses.map((item) => {
                        return (


                           <Grid item xs={12} sm={6} md={4}>
                              <Card sx={{ p: 3, boxShadow: "rgba(0, 0, 0, 0.12) 0px 3px 12px" }}>
                                 {
                                    classScheduled ?
                                       <>
                                          <Box>
                                             <Stack direction="row" justifyContent="space-between">
                                                <Stack direction="row" spacing={1}>
                                                   <SchoolIcon color='secondary' fontSize='small' />
                                                   <Typography variant="body2" color="secondary">
                                                      Schedule
                                                   </Typography>
                                                </Stack>

                                                <Stack direction="row" spacing={1}>
                                                   <AccessTimeIcon color='primary' fontSize='small' />
                                                   <Typography variant='caption' color="primary">
                                                      {item.time}
                                                   </Typography>
                                                </Stack>
                                             </Stack>

                                             <Box sx={{ mt: 4 }}>
                                                <Typography variant="h6" color="secondary">
                                                   {
                                                      item.date
                                                   }
                                                </Typography>
                                                <Typography variant="subtitle1" color="secondary">
                                                   {
                                                      item.topics
                                                   }
                                                </Typography>
                                             </Box>


                                             <Box sx={{ mt: 3 }}>
                                                <a href="https://zoom.us/" target="_blank">
                                                   <CardActionArea sx={{ backgroundColor: '#7f18c85e', p: 1 }}>
                                                      <Stack direction="row" spacing={2}>
                                                         <GroupsIcon color='primary' fontSize='small' />
                                                         <Typography variant="body2" color="primary">
                                                            Join Live Class in Zoom
                                                         </Typography>
                                                      </Stack>
                                                   </CardActionArea>
                                                </a>
                                             </Box>
                                          </Box>
                                       </>
                                       :
                                       <>
                                          <Stack alignItems="center">
                                             <Typography variant="body2" color="error">
                                                No classes scheduled yet
                                             </Typography>
                                          </Stack>
                                       </>
                                 }
                              </Card>
                           </Grid>
                        )
                     })

                     : ''
               }
            </Grid>

            {/* </Stack> */}
         </Container>
      </ >
   )
}

export default Class