import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import NavBar from '../main/Navbar'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { Button, Grid } from '@mui/material'


function LandingPage() {

    // navigate
    const navigate = useNavigate()
    const getStarted = () => {
        navigate('/login')
    }

    return (
        <Box sx={{ background: 'linear-gradient(0deg, rgba(22,0,38,1) 6%, rgba(127,24,200,1) 45%, rgba(255,255,255,1) 87%)' }}>
            <NavBar />
            {/* hero section */}
            <Container>
                <Box sx={{ minHeight: '90vh' }}>
                    <Grid container sx={{ height: '100%', p: 2 }} alignItems="center" justifyContent="center">
                        <Grid item md={7} display={{ xs: 'none', md: 'block' }}>
                            <Box sx={{ minHeight: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                                <Typography variant="h3" color="primary" sx={{ fontWeight: 600 }}>Learn</Typography>
                                <Typography variant="h3" color="primary" sx={{ fontWeight: 600 }}>Programming</Typography>
                                <Box sx={{ maxWidth: '30rem' }}>
                                    <Typography variant="subtitle1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit reiciendis quasi illo omnis recusandae fugiat aliquam id culpa minima!</Typography>
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <Button variant="contained" color='primary' size="large" onClick={getStarted}>Get Started</Button>
                                </Box>  
                            </Box>
                        </Grid>


                        <Grid item xs={12} display={{ xs: 'block', md: 'none' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_akio2kni.json" background="rgba(0, 0, 0, 0)" speed="1" loop autoplay style={{ width: '60%', height: '60%' }}></lottie-player>
                            </div>
                        </Grid>

                        <Grid item md={7} display={{ xs: 'block', md: 'none' }}>
                            <Box sx={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <Typography variant="h3" color="primary" sx={{ fontWeight: 600 }}>Learn Programming</Typography>
                                <Box sx={{ maxWidth: '30rem' }}>
                                    <Typography variant="subtitle1" color="initial">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit reiciendis quasi illo omnis recusandae fugiat aliquam id culpa minima!</Typography>
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <Button variant="outlined" color='primary' size="large"  onClick={getStarted}>Get Started</Button>
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={5} display={{ xs: 'none', md: 'block' }}>
                            <div>
                                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_akio2kni.json" background="rgba(0, 0, 0, 0)" speed="1" loop autoplay style={{ width: '80%', height: '80%' }}></lottie-player>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* about section */}
            <Box sx={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Container>
                    <Box sx={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Box><Typography variant="h3" color="primary" sx={{ fontWeight: 500 }}>About</Typography></Box>
                        <Box sx={{ textAlign: 'start' }}>
                            <Typography variant="body1" color="White">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tenetur magnam quam incidunt delectus nam perferendis eum sunt ab! Placeat officiis excepturi repudiandae non quae vero ipsa inventore ipsam sed, tempora eum nobis provident labore beatae fuga vitae quia error hic suscipit accusamus eaque fugiat necessitatibus! Voluptates distinctio dolore nulla? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo labore sint fuga, in facere ut minima natus molestias quaerat nihil temporibus similique porro impedit minus! Aspernatur sequi repellat hic dolorem quam dolorum exercitationem maiores qui suscipit, cum sunt magni architecto totam, non beatae repudiandae modi quas? Inventore enim mollitia quia optio sint! Eaque suscipit deserunt quidem aliquid ab fuga nulla corporis quis, quia dignissimos? Eveniet aliquam facere excepturi ab, fugit obcaecati, optio nihil iure ullam dolore tempore, repellendus autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis pariatur inventore, minus sapiente asperiores omnis nisi ad eaque laboriosam natus, ipsa necessitatibus provident id molestiae. Veniam, nemo illum, velit vel unde et doloribus ipsa quisquam repellat repudiandae molestiae provident laborum fugiat expedita officiis facere beatae numquam. Commodi, hic eveniet dolores rem veniam facere non adipisci? Saepe fugit quo, ratione obcaecati commodi, porro exercitationem hic maiores minus ipsam aliquam totam aut fuga nihil, esse aspernatur reprehenderit corporis cupiditate ad eveniet quibusdam minima deleniti rem. Sed exercitationem numquam inventore non id modi quaerat itaque rem doloribus illo sint, corporis nemo, provident placeat!</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* contact section */}
            <Box sx={{ minHeight: '90vh' }}>
                <Container>
                    <Typography variant="h5" color="secondary">Contact Section</Typography>
                </Container>
            </Box>
        </Box >
    )
}

export default LandingPage