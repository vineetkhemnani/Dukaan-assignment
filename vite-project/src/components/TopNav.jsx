import { Box, Container, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'

const TopNav = () => {
  return (
    <Flex
      w={'100%'}
      mx={'32px'}
      my={'12px'}
      
      borderBottom={'1px solid #D9D9D9'}
      width={'77vw'}
      justifyContent={'space-between'}
    >
    <Flex flex={'1 1 0'}>

      <Text mr={'16px'}>Payments</Text>
      <Icon mr={'6px'} mt={1.5} p={0.5}/> <Text px={1} mt={0.5} fontSize={'14px'}>How it works</Text>
    </Flex>
      <Input
        p={'9px 16px'}
        placeholder="Search features, tutorials, etc"
        w={'400px'}
        fontSize={'15px'}
      ></Input>
      <Icon />
      <Icon />
    </Flex>
  )
}
export default TopNav
