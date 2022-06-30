import { chakra, useColorMode, Flex, Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import { RiMoonFoggyFill, RiSunFoggyFill, RiArrowUpCircleFill } from 'react-icons/ri';
import Posts from '../components/Posts';

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const topRef = useRef<HTMLDivElement>(null);

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
        <chakra.div p={4} ref={topRef}>
          <Box cursor='pointer' onClick={toggleColorMode}>
            {
              colorMode === 'dark'
                ?
                <RiMoonFoggyFill style={{ height: '32px', width: '32px' }} />
                :
                <RiSunFoggyFill style={{ height: '32px', width: '32px' }} />
            }
          </Box>
        </chakra.div>
      </Flex>
      <Box position='fixed'
        bottom={4}
        right={4}
        zIndex={1}
      >
        <RiArrowUpCircleFill style={{ height: '38px', width: '38px', cursor: 'pointer' }} onClick={() => topRef.current?.scrollIntoView({behavior: "smooth"})}/>
      </Box>
    </div>
  );
}

export default Home;
