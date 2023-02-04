import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Container from '@mui/material/Container'
import { Box, Breadcrumbs, Card, Grid, Stack, Typography, CardActionArea, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function AdvancedClass() {

  const breadcrumbs = [
    { label: 'Home', to: '/student/home' },
    { label: 'Class', to: '/student/class' }
  ];


  // accordion styles and controlls
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.6rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor: 'rgba(127, 24, 200, 0.053)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

  const [expanded, setExpanded] = React.useState('1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }

  // demo classes
  const cardClasses = [
    {
      id: 1,
      time: '12:00 PM - 2:00 PM',
      date: '01-02-2023',
      topics: ' AI Introduction, Varaibles',
      live: true,
    },
    {
      id: 2,
      time: '12:00 PM - 2:00 PM',
      date: '02-02-2023',
      topics: 'Machine Learning',
      live: false
    },
    {
      id: 3,
      time: '12:00 PM - 2:00 PM',
      date: '03-02-2023',
      topics: 'Natural Language Processing (NLP)',
      live: false
    },
    {
      id: 4,
      time: '12:00 PM - 2:00 PM',
      date: '04-02-2023',
      topics: 'Reinforcement Learning',
      live: false
    },
    {
      id: 5,
      time: '12:00 PM - 2:00 PM',
      date: '05-02-2023',
      topics: 'Generative Models',
      live: false
    },
    {
      id: 6,
      time: '12:00 PM - 2:00 PM',
      date: '06-02-2023',
      topics: 'Artificical Intellgence Advantages and Disadvantages',
      live: false
    },
  ]

  return (
    <>
      <Container>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mt: 2 }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
              <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
            </Link>
          ))}
        </Breadcrumbs>

        {/* sidebar grid for large screens */}
        <Grid container spacing={3} sx={{ width: '95vw' }}>
          <Grid item md={4} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', minHeight: '80vh', p: 2, borderRadius: '1rem' }}>
              <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ borderBottom: `1px solid lightgrey`, pb: 1, mt: 1 }}>
                <Box>
                  <Typography variant="h5" color="secondary">Artificial Intellegence Python</Typography>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant='caption' color="secondary">Batch Id: 01PY01</Typography>
                    <Typography variant='caption' color="secondary">Duration: 90hrs</Typography>
                  </Stack>
                </Box>
              </Stack>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="primary">Course</Typography>
                <Box>
                  <Typography variant="caption" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo doloribus est. Iusto impedit laborum expedita suscipit ipsam sapiente quasi quaerat? Dolores, nemo. Dolor dolores corrupti voluptatibus consequatur eos dolore?</Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 4 }}>
                <Typography variant="body2" color="primary">Contact Instructor</Typography>
                <Box>
                  <Stack direction="row" alignItems="center" justifyContent="flex-start">
                    <Typography variant="body1" color="initial">John Doe</Typography>

                    
                    <IconButton>
                      <EmailIcon fontSize="small" />
                    </IconButton>


                    <IconButton>
                      <WhatsAppIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                  <div style={{marginTop: '-0.6rem'}}>
                  <Typography variant="caption" color="initial" >AI Research and Develoer @ SciPy Technologies</Typography>
                  </div>
                </Box>
              </Box>
            </Card>
          </Grid>



          {/* topbar gird for small screens */}
          <Grid item xs={12} sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' } }}>
            <Stack direction="row" justifyContent="space-between" spacing={1} sx={{ borderBottom: `1px solid lightgrey`, pb: 1, mt: 1 }}>
              <Box sx={{ minWidth: '45vw' }}>
                <Typography variant="h6" color="secondary">Artificial Intellegence Python</Typography>
                <Stack direction="row" justifyContent="space-between" spacing={1}>
                  <Typography variant='caption' color="secondary">Batch Id: 01PY01</Typography>
                  <Typography variant='caption' color="secondary">Instructor: John Doe</Typography>
                  <Typography variant='caption' color="secondary">Duration: 90hrs</Typography>
                </Stack>
              </Box>
            </Stack>
          </Grid>



          {/*  classes grid  */}
          <Grid item md={8} sx={{ display: { xs: 'block', sm: 'block', md: 'block' } }}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', minHeight: '80vh', maxHeight: '80vh', overflow: "scroll", p: 2, borderRadius: '1rem' }}>
              {/* accordion */}
              <Box sx={{mb: 1}}>
              <Typography variant="h6" color="secondary">Topics</Typography>
              </Box>
              {
                cardClasses.map((item, val) => {
                  return (
                    <Accordion expanded={expanded === item.id} onChange={handleChange(item.id)}>
                      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography variant="body2">{item.topics}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
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

                          {
                            item.live ?
                              <>
                                <Box sx={{ mt: 3 }}>
                                  <a href="https://zoom.us/" target="_blank">
                                    <CardActionArea sx={{ backgroundColor: '#7f18c839', p: 1 }}>
                                      <Stack direction="row" spacing={2}>
                                        <GroupsIcon color='primary' fontSize='small' />
                                        <Typography variant="body2" color="primary">
                                          Join Live Class in Zoom
                                        </Typography>
                                      </Stack>
                                    </CardActionArea>
                                  </a>
                                </Box>
                              </>

                              :

                              <>
                                <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1}>
                                  <Box>
                                    <a href="https://zoom.us/" target="_blank">
                                      <CardActionArea sx={{ backgroundColor: '#7f18c839', p: 1 }}>
                                        <Stack direction="row" spacing={2}>
                                          <YouTubeIcon color='primary' fontSize='small' />
                                          <Typography variant="body2" color="primary">
                                            Tutorial
                                          </Typography>
                                        </Stack>
                                      </CardActionArea>
                                    </a>
                                  </Box>

                                  <Box>
                                    <a href="https://zoom.us/" target="_blank">
                                      <CardActionArea sx={{ backgroundColor: '#7f18c839', p: 1 }}>
                                        <Stack direction="row" spacing={2}>
                                          <PictureAsPdfIcon color='primary' fontSize='small' />
                                          <Typography variant="body2" color="primary">
                                            Pdf Notes
                                          </Typography>
                                        </Stack>
                                      </CardActionArea>
                                    </a>
                                  </Box>
                                </Stack>
                              </>
                          }

                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  )
                })
              }
            </Card>
          </Grid>
        </Grid>

      </Container>
    </>
  )
}

export default AdvancedClass