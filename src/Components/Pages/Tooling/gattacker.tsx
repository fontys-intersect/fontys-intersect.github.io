import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Gattacker = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Gattacker </Text>
            <Text fontSize={'l'}>
            Gattacker is an open-source tool used for testing the security of Bluetooth Low Energy (BLE) devices. It aims to identify vulnerabilities and improve end-user security. The tool enables various attacks, including denial of service, spoofing, data interception, and device control. It has been tested on Raspberry Pi and Linux systems with Bluetooth 4 adapters, but can potentially work on smartphones and embedded devices. Gattacker functions as a "Man-in-the-Middle," intercepting and modifying data between the device and the mobile application. 
            </Text>
            <br />
         
    
            <Image
                src={"/assets/images/gattacker.png"}
                alt="gattacker"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
        </Container>
    </Box>
);