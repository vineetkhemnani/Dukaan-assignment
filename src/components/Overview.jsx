import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Card, Flex, Text } from '@chakra-ui/react'

const Overview = () => {
  return (
    <Flex
      mt={'32px'}
      flexDirection={'column'}
      alignItems={'flex-start'}
      gap={'24px'}
      alignSelf={'stretch'}
    >
      <Flex
        justifyContent={'space-between'}
        alignItems={'center'}
        alignSelf={'stretch'}
      >
        <Text fontSize={'20px'} fontWeight={500}>
          Overview
        </Text>
        <Button bg={'white'} p={2}>
          Last month <ChevronDownIcon></ChevronDownIcon>
        </Button>
      </Flex>
      <Flex alignItems={'flex-start'} gap={'20px'} alignSelf={'stretch'}>
        <Flex
          bg={'white'}
          p={'20px'}
          flexDirection={'column'}
          alignItems={'flex-start'}
          flex={1}
          gap={'16px'}
          boxShadow={'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'}
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
          boxShadow={'0px 2px 6px 0px rgba(26, 24, 30, 0.04)'}
        >
          <Text fontWeight={400}>Amount Received</Text>
          <Text fontWeight={500}>₹23,92,312.19</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Overview
