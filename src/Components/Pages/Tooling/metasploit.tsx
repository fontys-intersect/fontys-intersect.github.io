import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Metasploit = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Metasploit </Text>
            <Text fontSize={'l'}>
            The Metasploit framework is an open-source penetration testing framework. It contains a suite of tools that can be used to test security vulnerabilities, enumerate networks, execute attacks, and evade detection. It was created by HD Moore and now maintained by Rapid7, a cybersecurity company. 

The framework includes a large database of known vulnerabilities and exploits, and also allows users to create their own custom exploit modules. The tool can be used to scan and identify vulnerabilities in a target system and then use these custom exploit modules to take advantage of these vulnerabilities.

The framework consists of several components, including the Metasploit Console, which is a command-line interface for running Metasploit modules and interacting with target systems. The console allows users to set up and configure their testing environment, select targets for exploitation, and view results of their scans and exploits.

Another crucial component of Metasploit is the Meterpreter, which is a powerful payload that allows users to gain remote access and control of a compromised system. Once a system has been compromised, Meterpreter allows users to perform a wide range of actions, such as uploading and downloading files, capturing keystrokes, and executing arbitrary commands.

Metasploit also includes features for generating reports on the results of penetration tests, including detailed information on vulnerabilities discovered, exploits used, and recommendations for mitigating any security risks.

            </Text>
            <br />
            <br />
            <Image
                src={"/assets/images/metasploit.png"}
                alt="metasploit"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
             <br />
             <br />

        </Container>
    </Box>
);