import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS for frontend with API routes for backend</span>
        </ListItem>
        
      </List>

      <ProjectImage src="/images/works/RBYPC.png" alt="RBYPC" />
      <ProjectImage src="/images/works/RBY.jpg" alt="RBYPC" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
