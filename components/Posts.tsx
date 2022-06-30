import { Flex } from '@chakra-ui/react';
import Post from './Post';

export default function Posts() {
    console.log('call Posts');

    const postData = [
        {
            name: 'fon sunisa',
            profileImage: 'profile.jpg',
            message: 'Hello, World!',
            postImage: 'cyberpunk-city-buildings-art.jpg',
            timestamp: 'timestamp here',
        },
        {
            name: 'fon sunisa',
            profileImage: 'profile.jpg',
            message: 'Hello, World!',
            postImage: 'pool_party.jpg',
            timestamp: 'timestamp here',
        },
        {
            name: 'fon sunisa',
            profileImage: 'profile.jpg',
            message: 'Ok',
            postImage: 'okok.jpg',
            timestamp: 'timestamp here',
        }
    ];

    return (
        <Flex flexDirection='column' w='500px'>
            {
                postData.map((item, id) => 
                    <Post key={`post-${id}`}
                        name={item.name}
                        profileImage={item.profileImage}
                        message={item.message}
                        postImage={item.postImage}
                    />
                )
            }
        </Flex>
    );
}