import {
  Heading, 
  Container,
  Badge,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Wedding Album">
    <Container>
      <Title>
        Digitl Wedding Album <Badge>2022</Badge>
      </Title>
      <P>Developed from the Framer Motion tutorial from Fireship.io and the React-Framer Slider tutorial from Dev Ed.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools</Meta>
          <span>NextJS, Framer Motion</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://teoandyuriko.vercel.app/">
          https://teoandyuriko.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS</span>
        </ListItem>
      </List>

         <Heading as="h3" fontSize={20} mb={4}>Top Modal Lightbox</Heading> 
        <p>On load, the main image is hown in a modal. Buttons allow for navigation through the carousel, and the carousel wraps infinitely.</p>
        <br />
        <ProjectImage src="/images/works/teoandyuriko.png" alt="Digital Wedding Album Top Page" />
        <br />
        <Heading as="h3" fontSize={20} mb={4} gridColumnStart={1}>Framer Motion SLider</Heading>
        
        <p>The sliders developed with Framer Motion are swipable on mobile and draggable with mouse on desktop.   Clicking an image sets the app's state and launches a modal with a useEffect hook.</p>
        <br />
        <ProjectImage src="/images/works/teoandyuriko-slider.png" alt="Digital Wedding Album Slider" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
