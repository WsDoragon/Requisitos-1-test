import { Box, Button, Center, Container, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import "./Home.css";
 
function Home() {
  return (
    <div className='home_header'>
      
      <Heading as = 'h1' size='4xl' isTruncated>
      <Center>
        Bienvenido a Gestion de Noticias
      </Center>
      </Heading>
      
      <Center>
        <Link href='/login2'>
          <Button colorScheme={'blue'} size={'lg'}>Presione para acceder</Button>
        </Link>
      </Center>
    </div>
  );
}
 
export default Home;