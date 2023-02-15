import React, { useState, useEffect } from 'react';
import { Box, Breadcrumbs, Card, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom';

import Loader from '../../scenes/main/Loader'
import { toast } from 'react-toastify'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { courseReg } from '../../store/loginedUserSlice';

function CourseRegister() {

    const id = useSelector((state) => state.loginedUser.id)
    const active = useSelector((state) => state.loginedUser.courseReg)
    console.log(active)
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [form, setForm] = useState({ userID: id, course: '', semester: '' });
    const breadcrumbs = [
        { label: 'Home', to: '/student/home' },
        { label: 'Course Register', to: '/student/class' }
    ];

    const [applied, setApplied] = useState(true)


    // form dropdown
    const [course, setCourse] = useState('')
    const [semester, setSemester] = useState('')
    const [pdfSub, setPdfSub] = useState(true)

    // form onchange handler

    const checkCourseReg = () => {
        if (active == "pending") {
            setApplied(false)
        }
    }


    const onChangeHandler = (event) => {
        // setPdfSub(true)
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        console.log(form)

    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/user/regcourse", form)
            .then((response) => {
                const update = {
                    courseReg: "pending"
                }
               axios.put(`http://localhost:5000/user/updatecourseReg/${id}`, update)
                    .then((response) => {
                        console.log(response)         
                           dispatch(courseReg("pending")) 
                           checkCourseReg() 
                           
                    })
                    .catch((err) => console.error(err));
                toast.success(`Applied Succesfully`, {
                    position: toast.POSITION.TOP_CENTER,
                });  
           
            })
            .catch((err) => console.error(err));
           
           
            
            let delayInMilliseconds = 3000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  window.location.reload(false);
}, delayInMilliseconds);

    };

    

    useEffect(() => {
        checkCourseReg()
    }, []);




    return (
        <>
            {/* Breadcrumbs */}
            <Container>
                <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mt: 2 }}>
                    {breadcrumbs.map((breadcrumb, index) => (
                        <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
                            <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
                        </Link>
                    ))}
                </Breadcrumbs>

                <Grid container spacing={3} sx={{ width: '95vw' }}>
                    <Grid item>
                        {
                            applied ?
                                <Box component="form" sx={{ mt: 1, p: 3, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;' }} onSubmit={onSubmitHandler}>
                                    <Box sx={{ mb: 3 }}><Typography variant="h4" color="secondary">Course Registration</Typography></Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    name='course'
                                                    value={form.course}
                                                    label="Select Course"
                                                    onChange={onChangeHandler}

                                                >
                                                    <MenuItem value={"AI"}>Artificial Intellgence</MenuItem>

                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="whatsappNo"
                                                label="Whatsapp No"
                                                name="whatsappNo"
                                                onChange={onChangeHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="department"
                                                label="department"
                                                name="dept"
                                                onChange={onChangeHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    name='semester'
                                                    value={form.semester}
                                                    label="semester"
                                                    onChange={onChangeHandler}

                                                >
                                                    <MenuItem value={"S1"}> 1 </MenuItem>
                                                    <MenuItem value={"S2"}> 2 </MenuItem>
                                                    <MenuItem value={"S3"}> 3 </MenuItem>
                                                    <MenuItem value={"S4"}> 4 </MenuItem>
                                                    <MenuItem value={"S5"}> 5 </MenuItem>
                                                    <MenuItem value={"S6"}> 6 </MenuItem>
                                                    <MenuItem value={"S7"}> 7 </MenuItem>
                                                    <MenuItem value={"S8"}> 8 </MenuItem>

                                                </Select>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="place"
                                                label="Place"
                                                type="text"
                                                id="place"
                                                onChange={onChangeHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="college"
                                                label="College"
                                                type="text"
                                                id="college"
                                                onChange={onChangeHandler}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value={pdfSub} color="primary" name="premium" onChange={onChangeHandler} />}
                                                label="I want to subscribe for pdf learning material."

                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        // fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Apply
                                    </Button>
                                </Box>
                                :
                                <div style={{ height: '70vh', width: '95vw', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <lottie-player src="https://lottie.host/344fdb29-6755-436a-b0e2-8b874f61cdec/h7cqKXroFY.json" background="rgba(0, 0, 0, 0)" speed="1" loop autoplay style={{ width: '80%', height: '80%' }}></lottie-player>


                                    <Box sx={{ mt: -2, textAlign: 'center' }}>
                                        <Typography variant="h3" color="secondary">Your Classroom is under construction</Typography>
                                        <Typography variant="h5" color="secondary">Soon, you will be able to access your classroom</Typography>
                                    </Box>
                                    {/* <iframe src="https://lottie.host/?file=344fdb29-6755-436a-b0e2-8b874f61cdec/h7cqKXroFY.json"></iframe> */}
                                </div>
                        }
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CourseRegister