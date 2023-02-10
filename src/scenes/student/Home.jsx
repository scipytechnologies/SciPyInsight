import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'
import Container from '@mui/material/Container'
import { Box, Breadcrumbs, Card, Grid, Stack, Typography } from '@mui/material'
import { Link, Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { courseReg } from '../../store/loginedUserSlice';
import { useNavigate } from 'react-router-dom';
import LineChart from './LineChart';
import BarChart from './BarChart';
import { attendence, Data } from './chartData'

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
        if (response.data.courseReg == "false") {
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
          <Typography variant="h4" color="secondary" >Welcome,</Typography>
          <Typography variant="h4" color="secondary" >John Doe</Typography>
        </Stack>
        <Grid container minWidth='90vw' spacing={3}>

          <Grid item xs={12} md={8}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 3, borderRadius: '1rem' }}>

              <Typography variant="body1" color="secondary" sx={{ mb: 1 }}>Course Progression</Typography>

              <LineChart chartData={userData} />
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 1, borderRadius: '1rem' }}>
              <BarChart chartData={attendenceData} />
            </Card>

            <Card sx={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;', p: 1, borderRadius: '1rem', mt: 2 }}>
              <Box>
                <Typography variant="caption" color="initial">Upcomming Classes</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Box sx={{ border: 'grey .5px solid', borderRadius: '.7rem', p: 1, mt: 1, mr: 1, minWidth: '5rem' }}>
                    <Typography variant="body1" color="primary">8:30 PM</Typography>
                  </Box>

                  <Box>
                    <Typography variant="caption" color="secondary">Programming Python, Introduction to Artificial Intellegence</Typography>
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

        </Grid>
      </Container>
    </>
  )
}

export default Home