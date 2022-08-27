import { Box, Text, Image, Flex, chakra, Button } from '@chakra-ui/react';
import Data from './data.json';
import { motion } from 'framer-motion';
const ChakraBox = chakra(motion.div, {});

const Job = () => {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
  return (
    <Flex rowGap={[10, 10, 4, 4]} py={[10, 10, 6, 6]} flexDirection={'column'}>
      {Data.map(item => {
        return (
          <ChakraBox whileHover={{ scale: 1.01 }} key={item.id}>
            <Flex
              gap={[4, 4, 10, 10]}
              px={4}
              py={['8', '8', '2', '2']}
              borderWidth='1px'
              borderRadius={'lg'}
              bgGradient='-webkit-box-shadow: 0px 7px 10px -2px rgba(0,0,0,0.47);
              box-shadow: 0px 7px 10px -2px rgba(0,0,0,0.47);'
              _hover={{
                borderLeft: '4px solid hsl(180, 29%, 50%)',
              }}
              justifyContent={'space-between'}
              alignItems={['flex-start', 'flex-start', 'center', 'center']}
              flexDirection={['column', 'column', 'row', 'row']}>
              <Flex gap={4}>
                <Box
                  position={['absolute', 'absolute', 'relative']}
                  width={['50px', '50px', 'max', 'max']}>
                  <Image
                    src={item.logo}
                    marginTop={['-54px', '-54px', '0px', '0px']}
                  />
                </Box>
                <Flex flexDirection='column'>
                  <Text fontSize='md' as='b' color={'hsl(180, 29%, 50%)'}>
                    {item.company}
                  </Text>
                  <Text
                    fontSize='lg'
                    as='b'
                    _hover={{ color: 'hsl(180, 29%, 50%)' }}
                    cursor='pointer'>
                    {item.position}
                  </Text>
                  <Flex gap={4} fontSize='md' flexFlow='wrap'>
                    <Text>{item.postedAt}</Text>
                    <Text>{item.contract}</Text>
                    <Text>{item.location}</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap={2} flexFlow='wrap' justifyContent={'flex-end'}>
                {item.languages.map((lang, idex) => {
                  return (
                    <Button
                      bgColor={'hsl(180, 31%, 95%)'}
                      color={'hsl(180, 29%, 50%)'}
                      key={idex}>
                      {lang}
                    </Button>
                  );
                })}
              </Flex>
            </Flex>
          </ChakraBox>
        );
      })}
    </Flex>
  );
};

export default Job;
