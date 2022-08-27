import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import Layout from './components/Layout/Layout';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <Layout />
      </Grid>
    </Box>
  </ChakraProvider>
);
