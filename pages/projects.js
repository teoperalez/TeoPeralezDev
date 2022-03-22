import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbRBYPC from '../public/images/works/RBYPC.png'
import thumbThinkTrade from '../public/images/works/TTP.png'
import thumbBudget from '../public/images/works/budget.png'
import thumbTeoYuriko from '../public/images/works/teoandyuriko.png'

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mt={14} mb={4}>
        Production Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="rbypc" title="RBYPC" thumbnail={thumbRBYPC}>
          <br />
          A Pokemon project that is broadcast on Youtube. The accompanying NextJS Website utilizes Framer Motion, API routes, global states, local storage, and custom hooks.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="thinktradeprofit"
            title="Think. Trade. Profit."
            thumbnail={thumbThinkTrade}
          >
            <br />
            Technical stock trading indicator coding for retail investors.  Built on th NextJS Blog template, it includes an API for accessing indicator code and uses Markdown in the Blog Posts section.
          </WorkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Course Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
        <WorkGridItem
            id="weddingalbum"
            thumbnail={thumbTeoYuriko}
            title="Digital Wedding Album"
          >
            <br />
            A custom digital wedding album in NextJS with custom Framer Motion Modal and custom Framer Motion Slider.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="budget"
            thumbnail={thumbBudget}
            title="Budget App"
          >
            <br />
            A budget app using custom hooks, local storage, and the react-bootstrap library.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
