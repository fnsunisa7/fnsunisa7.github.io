import { Flex, Box, useColorMode } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { RiMoonFoggyFill, RiSunFoggyFill } from 'react-icons/ri';
import Posts from '../components/Posts';

const Home: NextPage = () => {
  console.log('call Home');

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      <Head>
        <title>fon sunisa</title>
        <meta name="description" content="fon sunisa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Flex flexGrow={1} justifyContent='center' alignItems='center' py={4}>
          <Posts />
        </Flex>
        <Box p={4} cursor='pointer' onClick={toggleColorMode}>
          {
            colorMode === 'dark'
            ?
            <RiMoonFoggyFill style={{ height: '32px', width: '32px' }} />
            :
            <RiSunFoggyFill style={{ height: '32px', width: '32px' }} />
          }
        </Box>
      </Flex>
    </div>
  )
}

export default Home
