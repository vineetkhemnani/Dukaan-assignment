import { Flex, Text } from '@chakra-ui/react'

const Overview = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'24px'} alignSelf={'stretch'}>
        <Flex justifyContent={'space-between'} alignItems={'center'} alignSelf={'stretch'}></Flex>
      <Text fontSize={'20px'} fontWeight={500}>Overview</Text>
      <Flex alignItems={'flex-start'} gap={'20px'} alignSelf={'stretch'}>
        <Flex
          bg={'white'}
          p={'20px'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          flex={1}
          gap={'16px'}
        >
          <Text fontWeight={400}>Online Orders</Text>
          <Text fontWeight={500}>231</Text>
        </Flex>
        <Flex
          bg={'white'}
          p={'20px'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          flex={1}
          gap={'16px'}
        >
          <Text fontWeight={400}>Amount Received</Text>
          <Text fontWeight={500}>₹23,92,312.19</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Overview
