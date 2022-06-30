import { Flex } from '@chakra-ui/react';
import Post from './Post';

export default function Posts() {
    console.log('call Posts');

    const postData = [
        {
            name: 'fon sunisa',
            profileImage: 'profile.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit est vel lacus auctor hendrerit. Curabitur eu lorem aliquet augue iaculis maximus. In hac habitasse platea dictumst. Aenean elit nulla, ornare nec egestas sed, finibus at augue. Mauris vitae sollicitudin massa. Aliquam tristique orci nunc, vitae blandit ante aliquam malesuada. In consequat tempor massa, nec ultrices neque venenatis in. Mauris molestie vel dui vel lobortis. Phasellus ornare dignissim massa eu maximus. Cras semper faucibus metus, pharetra fringilla lacus aliquam ut. Sed tempor odio in mi commodo, sit amet condimentum mi sodales.',
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