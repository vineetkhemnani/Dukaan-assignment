import { Box, Button, Container, Flex, HStack } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import LeftNav from './components/LeftNav'
import TopNav from './components/TopNav'
import Overview from './components/Overview'

const App = () => {
  return (
    <>
      <Flex fontFamily={'Inter'}>
        <LeftNav />
        <Flex flexDirection={'column'}>
          <TopNav />
          <Box mx={'32px'}>
            <Overview />
            <TransactionTable />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
export default App
