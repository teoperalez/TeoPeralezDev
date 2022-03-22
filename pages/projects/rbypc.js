import { Container, Badge, Link, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="RBY Pokemon Challenges">
    <Container>
      <Title>
        RBY Pokemon Challenges <Badge>2021-</Badge>
      </Title>
      <P>
        A Pokemon project that is broadcast on Youtube.   The accompanying NextJS Website utilizes Framer Motion, API routes, global states, local storage, and custom hooks.  
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rby-pokmon-challenges.vercel.app/">
          https://rby-pokmon-challenges.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web App</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS for frontend with NextJS API routes for backend</span>
        </ListItem>
        
      </List>

      <Heading as="h3" fontSize={20} mt={10} mb={4}>RBY Pokemon Challenges Top Page</Heading> 
      <p>Built on NextJS, it uses React Context with useEffect hooks to import Pokemon Data from the NextJS API to create a global Pokedex and randomize 3 Pokemon for the top-page randomizer.  Choosing a Pokemon stores it in a local Pokedex stored on Local Storage.</p>
      <br />
      <ProjectImage src="/images/works/rbypc-top.png" alt="RBY Pokemon Challenges Top" />
      
      <Heading as="h3" fontSize={20} mb={4}>Pokemon Randomizer</Heading> 
      <p>Utilizing Framer Motion, the Pokemon actually appear to come out of the pokedball when clicked and each Pokeball has CSS animations to shake when hovered.</p>
      <br />
      <ProjectImage src="/images/works/rbypc-randomizer.png" alt="Pokemon Randomizer" />
      
      <Heading as="h3" fontSize={20} mb={4}>Custom Framer Slider</Heading> 
      <p>Using the drag features of Framer Motion, the slider can be used with a mouse or touch devices to scroll through a horizontal list of videos.  The iframes for the Youtube players are also automatically resized based on the viewport, so they always maintain the correct aspect ratio on page load.</p>
      <br />
      <ProjectImage src="/images/works/rbypc-slider.png" alt="Pokemon Randomizer" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
