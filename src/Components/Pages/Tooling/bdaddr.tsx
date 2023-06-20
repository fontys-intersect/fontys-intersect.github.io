import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Bdaddr = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Bdaddr </Text>
            <Text fontSize={'l'}>
            bdaddr is a command-line tool used for Bluetooth device address manipulation in Linux-based systems. It allows users to view, modify, and set the Bluetooth device address (BDADDR) of Bluetooth adapters. bdaddr is commonly used for tasks such as changing the MAC address of a Bluetooth device or restoring a device to its original address. This tool is useful for Bluetooth testing, privacy enhancements, and troubleshooting Bluetooth-related issues on Linux platforms. 
            </Text>
            <br />
        
            <Image
                src={"/assets/images/bdaddr.png"}
                alt="bdaddr"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
        </Container>
    </Box>
);