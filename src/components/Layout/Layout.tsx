import Job from '../Job';
import { Container } from '@chakra-ui/react';

const Layout = () => {
  return (
    <Container minW={['90%', '90%', '90%', '70%']}>
      <Job />
    </Container>
  );
};

export default Layout;
