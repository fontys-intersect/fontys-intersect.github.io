import { Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link } from '@chakra-ui/react';

// All information about the UI library can be found here; https://chakra-ui.com/docs/getting-started
// The tags used (like Box, Container, Text etc.) can be found on the website with easy to read explanations.
// More information on how to add a new page and/or file can be found in the Transfer document

// The name of the component in the line underneath, represents the component which will be used in router.tsx
export const Nessus = () => (
    // height of the box or component (surrounding component) needs to be set to h={"100vh"}
    // Otherwise the footer will be in the middle of the page depending on the amount of content on the page.
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Nessus </Text>
            <Text fontSize={'l'}>
            Nessus is a comprehensive vulnerability scanner for identifying vulnerabilities in networks, systems, and applications. It is developed and maintained by Tenable, a cybersecurity company. It can scan a wide range of devices and systems, including servers, workstations, firewalls, routers, and even mobile devices. It uses a variety of techniques to identify these vulnerabilities, including active scanning, passive listening, and log analysis.
One of the key features of Nessus is its extensive vulnerability database, which contains lots of known vulnerabilities, exploits, and malware signatures. The scanner uses this database to identify potential security issues in target systems, and also includes features for prioritizing and categorizing vulnerabilities based on their severity and impact.

Nessus also includes a wide range of scanning options and customization features, allowing users to configure scans to meet their specific needs. For example, users can choose to scan specific IP addresses, ports, or protocols, or they can schedule scans to run at specific times or intervals.

After a scan is performed, Nessus can provide detailed reports on the results on the vulnerability scan. These reports include information on the vulnerabilities discovered, their severity and impact, and recommendations for remediation. Nessus can be a valuable tool for identifying and addressing security vulnerabilities in IoT devices.

            </Text>
            <br />
            <br />
            <Image
                src={"/assets/images/nessus.png"}
                alt="nessus"
                h="auto" //height
                w="auto" //width
                marginLeft={"10%"}
            />
             <br />
             <br />
        </Container>
    </Box>
);