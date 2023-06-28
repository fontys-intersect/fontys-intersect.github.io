import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Nrfconnect = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> nrfConnect </Text>
            <Text fontSize={'l'}>
            nRF Connect is a software tool used for Bluetooth development and testing. It provides a comprehensive platform for developers to interact with Bluetooth Low Energy (BLE) devices, analyze Bluetooth protocols, and troubleshoot connectivity issues. nRF Connect offers various features, including device scanning, service discovery, characteristic editing, and firmware updates. 
            </Text>
            <br />
           
            <Image
                src={"/assets/images/nrfconnect.png"}
                alt="nrfconnect"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
        </Container>
    </Box>
);