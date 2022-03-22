import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBetterCharts from '../public/images/contents/make-better-charts.jpg'
import thumbFullBacktest from '../public/images/contents/RSIBB-backtest.jpg'
import thumbOnix from '../public/images/contents/Onix.jpg'
import thumbPersian from '../public/images/contents/Persian.jpg'
import thumbBrock from '../public/images/contents/brock-minimum-battles.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h2" fontSize={28} mt={10} mb={8}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <Heading as="h3" fontSize={20} mb={4}>
          ThinkTradeProfit.com
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Make Better Charts"
            thumbnail={thumbBetterCharts}
            href="https://www.thinktradeprofit.com/posts/make-better-charts"
          />
          <GridItem
            title="Full Backtest: RSI + 200EMA VS RSI + BB + 200EMA"
            thumbnail={thumbFullBacktest}
            href="https://youtu.be/w8mcKLcR3_M"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={4}>
          RBY Pokemon Challenges
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Onix - Could Brock Beat Rival 5? #MinimumBattles"
            thumbnail={thumbOnix}
            href="https://youtu.be/w8mcKLcR3_M"
          />    
          <GridItem
            title="Persian - Is Even HYPER BEAM Enough!?!?! #MinimumBattles"
            thumbnail={thumbPersian}
            href="https://youtu.be/Smf3cTdr1xs"
          />
          <GridItem
            title="Only 3 Battles to Beat Brock? Testing every RBY Pokemon, Max DVs and 0DVs!"
            thumbnail={thumbBrock}
            href="https://youtu.be/v-cLZTatDEc"
          />      
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
