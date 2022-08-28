import { Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Image
        src={'/images/bg-header-desktop.svg'}
        alt='test'
        minW={'100%'}
        minH={['20']}
      />
    </>
  );
};

export default Header;
