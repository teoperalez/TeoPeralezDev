import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Teo's homepage" />
        <meta name="author" content="Teo Peralez" />
        <meta name="author" content="TePeDev" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tepedev" />
        <meta name="twitter:creator" content="@tepedev" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Teo Peralez's Dev Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
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
