import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" w="100%" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Teo's homepage" />
        <meta name="author" content="Teo Peralez" />
        <meta name="author" content="TePeDev" />
        <link rel="apple-touch-icon" href="/images/TePeDev_Logo_1-removebg-preview.png" />
        <link rel="shortcut icon" href="/images/TePeDev_Logo_1-removebg-preview.png" type="image/x-icon" />
        <meta name="twitter:card" content="/images/TePeDev_Logo_1-removebg-preview.png" />
        <meta name="twitter:site" content="@tepedev" />
        <meta name="twitter:creator" content="@tepedev" />
        <meta name="twitter:image" content="/images/TePeDev_Logo_1-removebg-preview.png" />
        <meta property="og:site_name" content="Teo Peralez's Dev Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/TePeDev_Logo_1-removebg-preview.png" />
        <title>Teo Peralez Dev - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.lg" pt={14}>
        

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
