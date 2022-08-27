import React from 'react';
import Job from '../Job';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image,
  Container,
  Flex,
} from '@chakra-ui/react';

const Layout = () => {
  return (
    <Container>
      <Job />
    </Container>
  );
};

export default Layout;
