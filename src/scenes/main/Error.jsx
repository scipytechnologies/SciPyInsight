import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()
    return (
        <div style={{ height: '90vh', width: '100vw', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <lottie-player src="https://lottie.host/d9b446c8-5589-4a15-957e-05f20262f3bb/5SRuxi5LXb.json" background="rgba(0, 0, 0, 0)" speed="1" loop autoplay style={{ width: '80%', height: '80%' }}></lottie-player>

            <Box sx={{mT: 1}} sx={{display: 'flex', flexDirection: 'column', alignITems: 'center'}}>
                <Typography variant={{xs: 'h6', md: 'body1'}} color="primary">Something went wrong!</Typography>
                <Button variant="contained" color="primary" size="small" onClick={()=>navigate('/')}>Back to Home</Button>
            </Box>
        </div>
    )
}

export default Error