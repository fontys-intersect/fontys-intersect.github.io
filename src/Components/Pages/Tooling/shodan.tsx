import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Shodan = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Shodan </Text>
            <Text fontSize={'l'}>
            Shodan is a search engine that is used by security researchers, penetration testers, and cybercriminals to find devices that are connected to the internet, like computers, webcams and security cameras. It keeps track of metadata, such as banners, operating system details, open ports and other information on the device. This information then can be used to find weaknesses in the device and potentially exploit it.

The website has a free tier limit which returns a maximum of returns of 10 results. If the user wants to remove the restriction, he is required to provide a reason and pay a fee.

            </Text>
            <br />
            <br />
            <Image
                src={"/assets/images/shodan.png"}
                alt="shodan"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
             <br />
             <br />
        </Container>
    </Box>
);