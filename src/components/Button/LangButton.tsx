import React from 'react';
import { Flex, Button, Image } from '@chakra-ui/react';
import IconRemove from '../../Icons/icon-remove.svg';

interface Props {
  languages: string[];
}

const LangButton: React.FC<Props> = ({ languages }) => {
  // const [isSelected, setIsSelected] = React.useState<boolean>(true);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log((e.target as HTMLElement).textContent);
  };

  return (
    <Flex
      gap={2}
      flexFlow='wrap'
      justifyContent={['flex-start', 'flex-end', 'flex-end', 'flex-end']}>
      {languages.map((lang, idex) => {
        return (
          <Flex key={idex}>
            <Button
              bgColor={'hsl(180, 31%, 95%)'}
              color={'hsl(180, 29%, 50%)'}
              onClick={handleClick}
              borderEndRadius={'none'}
              borderStartRadius={'0.5rem'}>
              {lang}
            </Button>
            <Flex
              bgColor={'hsl(180, 29%, 50%)'}
              width={'2.5rem'}
              justifyContent='center'
              alignItems={'center'}
              borderEndRadius={'0.5rem'}
              borderStartRadius={'none'}>
              <Image src={IconRemove} width={'20px'} />
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default LangButton;
