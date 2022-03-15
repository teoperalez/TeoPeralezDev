import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ThinkTradeProfit.">
    <Container>
      <Title>
        Think. Trade. Profit. <Badge>2021-</Badge>
      </Title>
      <P>
        Think Trade Profit provides technical syock trading indicators for retail investors.    
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>ThinkorSwim</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <ProjectImage src="/images/links/Banner.jpg" alt="Think. Trade. Profit." />
        
      </SimpleGrid>
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
