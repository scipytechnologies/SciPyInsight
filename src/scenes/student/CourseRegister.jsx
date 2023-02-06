import React from 'react'
import { Breadcrumbs, Container } from '@mui/material'
import { Link } from 'react-router-dom';

function CourseRegister() {


    const breadcrumbs = [
        { label: 'Home', to: '/student/home' },
        { label: 'Course Register', to: '/student/class' }
    ];

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
            </Container>
        </>
    )
}

export default CourseRegister