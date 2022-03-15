import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'
import thumbTTP from '../public/images/works/TTP.png'
import thumbRBYPC from '../public/images/works/RBYPC.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Teo Peralez
          </Heading>
          <p>Digital Creator ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/teo.jpg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Teo is a freelance and full-stack developer based in Ehime, Japan with a
          passion for building digital services/stuff he wants. He has a knack
          for all things relating to launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his guitar, a Pokemon emulator, and a stock chart. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/projects/thinktradeprofit" scroll={false}>
            <Link>ThinkTradeProfit.com</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1987</BioYear>
          Born in Lincoln, Nebraska, USA.
        </BioSection>
        <BioSection>
          <BioYear>2008</BioYear>
          Worked as .Net Developer at National Telecommunications and Information Administration (NTIA).
        </BioSection>
        <BioSection>
          <BioYear>2009</BioYear>
          Worked as Electrical Engineering Lab Proctor at Colorado State University.        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Completed the Bachelor&apos;s Program in the College of
          Business at Colorado State University
        </BioSection>
        <BioSection>
          <BioYear>2013</BioYear>
          Relocated to Ainan-chou, Ehime, Japan on the JET Program
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Worked as Assistant JET Program Coordinator for Consulate General of Japan in Los Angeles  
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked as Shikoku Instructor Manager/四国エリア課長 for NOVA Holdings. 
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Founded ThinkTradeProfit.com and began providing B2C coding services for technical stock indicators.  
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Original Music,{' '}
          <Link href="https://rby-pokemon-challenges.vercel.app/" target="_blank">
            Pokemon
          </Link>
          , Playing Guitar,{' '}
          <Link href="https://www.thinktradeprofit.com" target="_blank">
            Technical Market Analysis
          </Link>
          , Web Development, Mexican Food
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/teoperalez" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @teoperalez
              </Button>
            </Link>
          </ListItem>
          
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.thinktradeprofit.com/"
            title="Think.Trade. Profit."
            thumbnail={thumbTTP}
          >
            My technical stock indicator business
          </GridItem>
          <GridItem
            href="https://rby-pokemon-challenges.vercel.app/"
            title="RBY Pokemon Challenges"
            thumbnail={thumbRBYPC}
          >
            My Youtube Channel
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
