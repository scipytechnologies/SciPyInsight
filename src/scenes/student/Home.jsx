import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Container from '@mui/material/Container'
import { Box, Breadcrumbs, Card, Grid, LinearProgress, Stack, Typography } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { courseReg } from '../../store/loginedUserSlice';
import { useNavigate } from 'react-router-dom';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { attendence, Data } from './chartData'
import styled from '@emotion/styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Home() {
  const navigate = useNavigate()
  const id = useSelector((state) => state.loginedUser.id)
  const dispatch = useDispatch()

  const checkCourseReg = () => {


    axios.get(`http://localhost:5000/user/getuser/${id}`)
      .then(function (response) {
        // handle success
        console.log(response.data.courseReg);
        dispatch(courseReg(response.data.courseReg))
        if (response.data.courseReg !== "true" ) {
          navigate("/student/courseRegister");
        }

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }


  useEffect(() => {
    checkCourseReg();
  }, []);



  const breadcrumbs = [
    { label: 'Home', to: '/student/home' }
  ];


  // linechart config
  const [attendenceData, setAttendenceData] = useState({
    labels: attendence.map((data) => data.month),
    datasets: [{
      label: "Attendence Percentage",
      data: attendence.map((data) => data.precentage),
      backgroundColor: '#7f18c8'
    }]
  })

  // char config
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.week),
    datasets: [{
      label: "Course Progression",
      data: Data.map((data) => data.precentage),
      backgroundColor: '#7f18c8'
    }]
  })


  // course progress bar configs
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 8,
    backgroundColor: '#D6D6D6',
    color: '#7f18c8'
  }));

  return (
    <>
      <Container>
        <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb: 1 }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
              <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
            </Link>
          ))}
        </Breadcrumbs>

        {/* home page main boxes */}
        <Stack direction="row" sx={{ mb: 2 }}>
          <Typography variant="h4" color="secondary" >Welcome, John doe</Typography>
        </Stack>


        <Grid container minWidth='95vw' spacing={3}>

          {/* Course progression grid */}
          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 3, borderRadius: '1rem' }}>
              <Typography variant="body1" color="secondary" sx={{ mb: 1 }}>Course Progression</Typography>
              <BorderLinearProgress variant="determinate" value={40} />
            </Card>
          </Grid>


          <Grid item xs={12} md={4}>

            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 3, borderRadius: '1rem', mt: 1, minHeight: '35vh' }}>
              <Typography variant="body1" color="secondary">Attendence</Typography>
              <div style={{ width: '100%', height: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <CircularProgressbar value={60} maxValue={100} minValue={0} text={'60%'} strokeWidth={20} styles={{
                  // root: { width: '50px' },
                  path: { stroke: '#7f18c8', backgroundColor: 'red' },
                  text: { fill: '#7f18c8', fontSize: '18px' },
                }} />
              </div>
            </Card>
          </Grid>


          {/* Upcomming classes build */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 3, borderRadius: '1rem', mt: 1, minHeight: '35vh' }}>
              <Box>
                <Typography variant="body1" color="secondary">Upcomming Classes</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 2 }}>
                  <Box sx={{ border: 'grey .5px solid', borderRadius: '.7rem', p: 1, mt: 1, mr: 2, minWidth: '5rem' }}>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 400, }}>8:30 PM</Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="secondary">Programming Python, Introduction to Artificial Intellegence
                    </Typography>
                    <br />
                    <Stack direction="row" alignItems="center">
                      <Typography variant="caption" color="secondary">Online Meeting - </Typography>
                      <Typography variant="caption" color="green">Zoom Meeting </Typography>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Card>
          </Grid>

          {/* Notification pannel grid */}
          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 3, borderRadius: '1rem', minHeight: '50vh' }}>
              <Typography variant="body1" color="secondary" sx={{ mb: 1 }}>Notification Pannel</Typography> 
            </Card>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default Home