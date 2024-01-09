import { ChevronDownIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const TransactionTable = () => {
  return (
    <TableContainer w={'1128px'}>
      <Table variant="simple">
        <TableCaption>
            <Input/>
        </TableCaption>
        <Thead bg={'#F2F2F2'}>
          <Tr>
            <Th w={'246px'}>Order Id</Th>
            <Th textAlign={'right'}>
              Order date <ChevronDownIcon mb={1} />
            </Th>
            <Th textAlign={'right'}>Order Amount</Th>
            <Th textAlign={'right'}>
              Transaction fees{' '}
              <InfoOutlineIcon ml={'4px'} position={'fixed'} top={4} />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 19 }, (_, index) => (
            <Tr key={index}>
              <Td color={'#146EB4'}>#281209</Td>
              <Td textAlign={'right'}>7 July, 2023</Td>
              <Td textAlign={'right'}>₹1,278.23</Td>
              <Td textAlign={'right'}>₹22</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
export default TransactionTable
