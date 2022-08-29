import { Box, Flex, Text } from '@chakra-ui/react';
import LangButton from './Button/LangButton';

interface Props {
  languages: string[];
  borderRadius: string;
  borderWidth: string;
}

const Filters = ({ languages, borderRadius, borderWidth }: Props) => {
  console.log(languages);
  return (
    <Box translateY={'-40px'}>
      <Flex
        gap={[4, 4, 10, 10]}
        px={10}
        py={['8', '8', '4', '4']}
        borderRadius={borderRadius}
        borderWidth={borderWidth}
        bgGradient='-webkit-box-shadow: 0px 7px 10px -2px rgba(0,0,0,0.47);
              box-shadow: 0px 7px 10px -2px rgba(0,0,0,0.47);'
        alignItems={'center'}
        justifyContent='space-between'>
        <LangButton languages={languages} />
        <Text
          fontSize={'1.2rem'}
          fontWeight={'semibold'}
          _hover={{ color: 'hsl(180, 29%, 50%)', textDecoration: 'underline' }}
          cursor={'pointer'}>
          Clear
        </Text>
      </Flex>
    </Box>
  );
};

export default Filters;
