import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import img from '../assets/Image.png'
import leftConstants from '../constants/leftConstants'

const LeftNav = () => {
  return (
    <VStack w={'100%'} h={'1482px'} bg={'#1E2640'} py={'16px'} px={'10px'}>
      <Flex
        justifyContent={'space-between'}
        gap={'12px'}
        alignItems={'flex-start'}
      >
        <Image rounded={'10px'} src={img} w={'39px'} h={'39px'} />
        <Box>
          <Text fontSize={'15px'} fontWeight={'500'} color={'white'}>
            Nishyan
          </Text>
          <Text fontSize={'13px'} textDecor={'underline'} color={'#D2D4D9'}>
            Visit store
          </Text>
        </Box>
        <Text fontSize={'24px'} fontWeight={'bold'} color={'white'}>
          <ChevronDownIcon />
        </Text>
      </Flex>
      <Container mt={'24px'}>
        {leftConstants.map((item, index) => (
          <Container key={index} py={'8px'} px={'16px'}>
            <Flex w={'208px'} gap={'12px'} alignItems={'flex-start'}>
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <Text fontSize={'14px'} fontWeight={'500'} color={'white'}>
                {item.name}
              </Text>
            </Flex>
          </Container>
        ))}
      </Container>

      <Flex
        w={'100%'}
        bg={'#353C53'}
        justifyContent={'center'}
        mt={'auto'}
        borderRadius={'4px'}
      >
        <Button bg={'inherit'} textColor={'white'} m={'6px 12px'} gap={'12px'}>
          <Text
            borderRadius={'4px'}
            ml={-7}
            p={'6px'}
            bg={'#494F64'}
            dangerouslySetInnerHTML={{
              __html: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0002 3.79727C2.42343 3.79727 1.8002 4.35527 1.8002 5.24727V18.7473C1.8002 19.6393 2.42343 20.1973 3.0002 20.1973H21.0002C21.577 20.1973 22.2002 19.6393 22.2002 18.7473V15.8473H17.0003C14.874 15.8473 13.1503 14.1236 13.1503 11.9973C13.1503 9.87097 14.874 8.14727 17.0003 8.14727H22.2002V5.24727C22.2002 4.35527 21.577 3.79727 21.0002 3.79727H3.0002ZM23.8002 8.14727V5.24727C23.8002 3.65398 22.6326 2.19727 21.0002 2.19727H3.0002C1.36782 2.19727 0.200195 3.65398 0.200195 5.24727V18.7473C0.200195 20.3405 1.36782 21.7973 3.0002 21.7973H21.0002C22.6326 21.7973 23.8002 20.3405 23.8002 18.7473V15.8473H23.8503V8.14727H23.8002ZM16.0002 11.9473C16.0002 11.4778 16.3808 11.0973 16.8502 11.0973H18.1502C18.6197 11.0973 19.0002 11.4778 19.0002 11.9473C19.0002 12.4167 18.6197 12.7973 18.1502 12.7973H16.8502C16.3808 12.7973 16.0002 12.4167 16.0002 11.9473ZM14.8503 11.9973C14.8503 10.8099 15.8129 9.84727 17.0003 9.84727H22.1503V14.1473H17.0003C15.8129 14.1473 14.8503 13.1847 14.8503 11.9973Z" fill="white"/>
                  </svg>`,
            }}
          />

          <Box fontSize={'14px'}>
            <Text fontWeight={'400'}>Available credits</Text>
            <Text textAlign={'left'} fontWeight={'500'}>
              222.10
            </Text>
          </Box>
        </Button>
      </Flex>
    </VStack>
  )
}

export default LeftNav
