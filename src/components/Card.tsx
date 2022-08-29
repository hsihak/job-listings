import { useState } from 'react';
import {
  Box,
  Text,
  Image,
  Flex,
  chakra,
  Button,
  Divider,
} from '@chakra-ui/react';
import Data from './data.json';
import { motion } from 'framer-motion';
import Filters from './Filters';

// Assigning FrameMotion Component
const ChakraBox = chakra(motion.div, {});

const Card = () => {
  // const [isSelected, setIsSelected] = React.useState<boolean>(true);
  const [language, setLanguage] = useState<string[]>([]);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e?.currentTarget.value;
    setLanguage([...language, buttonValue]);
  };
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
  return (
    <Flex rowGap={[10, 10, 4, 4]} py={[10, 10, 6, 6]} flexDirection={'column'}>
      {/* Filter Component Start */}
      {language.length > 0 && (
        <Filters
          languages={language}
          borderRadius={'1rem'}
          borderWidth={'1rem'}
        />
      )}

      {/* Filter Component End */}

      {/* Card Component of Each Job ~ Start Here*/}
      {Data.map(item => {
        return (
          <ChakraBox whileHover={{ scale: 1.01 }} key={item.id}>
            <Flex
              gap={[4, 4, 10, 10]}
              px={10}
              py={['8', '8', '6', '6']}
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
                  <Flex alignItems={'center'} gap={4}>
                    <Text fontSize='md' as='b' color={'hsl(180, 29%, 50%)'}>
                      {item.company}
                    </Text>
                    <Flex gap={2}>
                      {item.new && (
                        <Flex
                          fontSize={'12px'}
                          bgColor={'hsl(180, 29%, 50%)'}
                          borderRadius={'2xl'}
                          py={'0.8'}
                          px={'1.5'}
                          fontWeight={'semibold'}
                          color={'white'}>
                          NEW!
                        </Flex>
                      )}
                      {item.featured && (
                        <Text
                          fontSize={'12px'}
                          bgColor={'hsl(180, 14%, 20%)'}
                          borderRadius={'full'}
                          py={'0.8'}
                          px={'1.5'}
                          fontWeight={'semibold'}
                          color={'white'}>
                          FEATURED
                        </Text>
                      )}
                    </Flex>
                  </Flex>

                  {/* Render to another page when the title is clicked by the user */}

                  <Text
                    fontSize='lg'
                    as='b'
                    _hover={{ color: 'hsl(180, 29%, 50%)' }}
                    cursor='pointer'>
                    {item.position}
                  </Text>

                  <Flex
                    gap={4}
                    fontSize='md'
                    flexFlow='wrap'
                    color={'hsl(180, 8%, 52%)'}>
                    <Text>{item.postedAt}</Text>
                    <Text>{item.contract}</Text>
                    <Text>{item.location}</Text>
                  </Flex>
                </Flex>
              </Flex>
              {/* Divider ~ Start Here */}
              <Divider display={['block', 'block', 'none', 'none']} />
              {/* Divider ~ End Here */}

              {/* <LangButton Component for Each Job ~ Start Here */}
              <Flex
                gap={2}
                flexFlow='wrap'
                justifyContent={[
                  'flex-start',
                  'flex-end',
                  'flex-end',
                  'flex-end',
                ]}>
                {item.languages.map((lang, idex) => {
                  return (
                    <Button
                      bgColor={'hsl(180, 31%, 95%)'}
                      color={'hsl(180, 29%, 50%)'}
                      key={idex}
                      value={lang}
                      onClick={handleClick}>
                      {lang}
                    </Button>
                  );
                })}
              </Flex>
              {/* <LangButton Component for Each Job ~ End Here */}
            </Flex>
          </ChakraBox>
        );
      })}
      {/* Card Component of Each Job ~ End Here */}
    </Flex>
  );
};

export default Card;
