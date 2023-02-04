import React from 'react'
import Navbar from './Navbar'
import Container from '@mui/material/Container'
import { Breadcrumbs, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Home() {


  const breadcrumbs = [
    { label: 'Home', to: '/student/home' }
  ];
  return (
    <>
      <Container>
        {/* <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{mb:1}}>
          {breadcrumbs.map((breadcrumb, index) => (
            <Link color="inherit" to={breadcrumb.to} key={index} aria-current={index.currentPage} underline="hover">
              <p style={{ fontSize: '12px' }}>{breadcrumb.label}</p>
            </Link>
          ))}
        </Breadcrumbs> */}

        <Stack>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam ratione, quos error autem facilis, quo illo odit quae vel magnam labore aspernatur consectetur ipsam? Veritatis excepturi eius, quos repudiandae quo quasi praesentium quaerat, magnam autem voluptatibus explicabo ad nihil aspernatur possimus quis velit quam laboriosam illo, cum illum. Reprehenderit eos fugit veniam nisi, quae repudiandae, voluptatibus sint saepe, labore perspiciatis doloremque placeat sunt? Quod porro eveniet reiciendis. voluptatibus quo distinctio qui aut alias quos obcaecati autem quidem mollitia praesentium nostrum voluptates repudiandae! Delectus a atque sit, incidunt ullam asperiores id omnis non nostrum vel porro, culpa quia voluptatem libero nulla rem mollitia! Explicabo dicta dignissimos possimus voluptate nisi dolorem eligendi, earum quidem minus sequi quo ab ratione sapiente deleniti, quisquam doloremque optio tempora voluptas ex dolore, saepe laboriosam omnis maxime facere? Porro consequuntur minima esse debitis animi consectetur ducimus iusto eaque, eveniet, voluptatum placeat, blanditiis obcaecati temporibus soluta! Ipsa sapiente doloribus eveniet ex magni alias eum accusamus cum numquam debitis enim, excepturi deleniti.
        </Stack>
      </Container>
    </>
  )
}

export default Home