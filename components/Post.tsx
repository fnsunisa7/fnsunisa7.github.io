import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';
import { RiHeart2Line, RiChat1Fill, RiShareLine } from 'react-icons/ri';

type PostType = {
    name?: string,
    message?: string,
    email?: string,
    timestamp?: string,
    profileImage?: string,
    postImage?: string
}

export default function Post({ name, message, email, timestamp, profileImage, postImage }: PostType) {
    return (
        <Flex flexDirection='column'>
            <Box p={5} mt={5} boxShadow='sm' rounded='2xl' border='4px'>
                <Flex alignItems='center' gap={2}>
                    <Avatar src={profileImage} name={name} />
                    <Box>
                        <Text fontSize='md'>{name}</Text>
                        {
                            timestamp ?
                                <Text fontSize='xs' color='gray.400'>
                                    {/* {new Date(timestamp?.toDate()).toLocaleString()} */}
                                    {timestamp}
                                </Text> :
                                <Text fontSize='xs' color='gray.400'>
                                    loading..
                                </Text>
                        }
                    </Box>
                </Flex>
                <Text py={4}>{message}</Text>
                {/* objectFit="cover" layout='fill' */}
                {/* <div className='relative h-56-224 md:h-96-384 bg-white'>
                        <img src={postImage} /> 
                    </div> */}
                {postImage && (
                    <Image src={postImage} alt="" />
                )}
                <Flex justifyContent='space-evenly' alignItems='center' boxShadow='base' pt={4}>
                    <Flex alignItems='center' gap={1} cursor='pointer'>
                        <RiHeart2Line style={{ height: '18px', width: '18px' }} />
                        <Text fontSize='xs'>Like</Text>
                    </Flex>
                    <Flex alignItems='center' gap={1} cursor='pointer'>
                        <RiChat1Fill style={{ height: '18px', width: '18px' }} />
                        <Text fontSize='xs'>Comment</Text>
                    </Flex>
                    <Flex alignItems='center' gap={1} cursor='pointer'>
                        <RiShareLine style={{ height: '18px', width: '18px' }} />
                        <Text fontSize='xs'>Share</Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    );
}