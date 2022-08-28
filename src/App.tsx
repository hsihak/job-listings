import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Box, Grid, extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

const theme = extendTheme({
  fonts: {
    heading: `'League Spartan', sans-serif`,
    body: `'League Spartan', sans-serif`,
  },
});

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <Header />
      <Box fontSize='xl'>
        <Grid minH='100vh' p={3}>
          <ColorModeSwitcher
            justifySelf='flex-end'
            position={'absolute'}
            top='4'
          />
          <Layout />
        </Grid>
      </Box>
    </ChakraProvider>
  </BrowserRouter>
);
