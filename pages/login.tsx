import Link from 'next/link';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { RiGoogleFill, RiArrowDropLeftLine } from 'react-icons/ri';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default function Login(): JSX.Element {
    const handleLogInWithGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);

                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                
                console.log(email, credential);
            });
    }

    const handleLogin = () => {
        console.log('handleLogin');
    }

    return (
        <Flex bg={useColorModeValue('gray.50', 'gray.800')}>
            <Link href='/'>
                <a>
                    <RiArrowDropLeftLine style={{ height: '52px', width: '52px', cursor: 'pointer' }} />
                </a>
            </Link>
            <Flex
                flexGrow={1}
                minH={'100vh'}
                align={'center'}
                justify={'center'}
            >
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        Login
                    </Heading>
                    <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            placeholder="enter your email address"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                        />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            onClick={handleLogin}
                            bg={'teal.400'}
                            color={'white'}
                            _hover={{
                                bg: 'teal.500',
                            }}>
                            Login
                        </Button>
                    </Stack>
                    <Text fontSize='xl' fontWeight={'extrabold'} textAlign='center'>- or -</Text>
                    <Button leftIcon={<RiGoogleFill />} variant='solid' onClick={handleLogInWithGoogle}>
                        Log In with Google
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    );
}