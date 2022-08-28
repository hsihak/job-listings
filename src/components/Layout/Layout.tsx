import Card from '../Card';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <>
      <Container minW={['90%', '90%', '90%', '70%']}>
        <Card />
      </Container>
    </>
  );
};

export default Layout;
