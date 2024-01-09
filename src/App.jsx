import { Box, Button, Container, Flex, HStack } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import Overview from './components/Overview'

const App = () => {
  return (
    <>
      <Flex>
        <LeftNav />
        <Flex flexDirection={'column'} mx={'32px'} width={'77vw'}>
          <TopNav />
          <Overview />
          <TransactionTable />
        </Flex>
      </Flex>
    </>
  )
}
export default App
