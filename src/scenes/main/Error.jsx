import { Box, Typography } from '@mui/material'
import React from 'react'

function Error() {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: '#ffff', display: 'flex', flexDirection: 'column' alignItems: 'center', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h1" color="initial">404 Error</Typography>
            </Box>
        </div>
    )
}

export default Error