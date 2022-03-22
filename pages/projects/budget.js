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
  <Layout title="Budget">
    <Container>
      <Title>
        Budget App <Badge>2022</Badge>
      </Title>
      <P>
        Based on the tutorial from WebDevSimplified.    
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools</Meta>
          <span>ReactJS, Bootstrap, Local Storage</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://budgetapp-silk.vercel.app/">
          https://budgetapp-silk.vercel.app/<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS</span>
        </ListItem>
      </List>

         <Heading as="h3" fontSize={20} mb={4}>Budget App Top Page</Heading> 
        <p>Data for each budget is saved in local storage using a customer useLocalStorage hook.  React-bootstrap is used for styling with progress bars, modals, buttons, and forms.</p>
        <br />
        <ProjectImage src="/images/works/budget.png" alt="Budget App Main Page" />
        <br />
        <Heading as="h3" fontSize={20} mb={4} gridColumnStart={1}>Budget App Modals and React Context</Heading>
        
        <p gridColumnStart={1}>Modal windows serve forms for CRUD actions.  React Context is used to organize the data and allow for updates to be reflected across the entire app.</p>
        <br />
        <ProjectImage src="/images/works/budgetmodal.png" alt="Budget App Modal" />
        <ProjectImage src="/images/works/budgetexpenses.png" alt="Budget App Expenses" />
        <br />
        <Heading as="h3" fontSize={20} mb={4} gridColumnStart={1}>Uncategorized Expenses Catch</Heading>
        
        <p>Deleted budgets are automatically recategorized as &quot;Uncategorized Expenses&quot; when deleted, and can be reassigned thereafter.</p>
        <br />
        <ProjectImage src="/images/works/uncategorized.png" alt="Budget App Uncategorized" />

        
      
      
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
