import {ExternalLinkIcon} from '@chakra-ui/icons';
import {Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link} from '@chakra-ui/react';

export const SolarEdge = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Solar Edge Case</Text>
            <br/>
            <Text fontSize="xl" fontWeight={"bold"}> Introduction </Text>
            <Text fontSize={'l'}>
                This pentest is about the solaredge inverter that is connected to the solarpanels that are located at
                the house of Rick Simons. We chose this as a case because more and more homes nowadays have solar panels
                that are connected to a smart inverter that exchanges its data with a monitoring portal. We wanted to
                know how secure these IoT inverters are and how they communicate with the home server.

                During our research we looked at the connected devices to the router at Rick's home
                to find out what Ip address and mac addresses the SolarEdge panels have. This was done by going to the
                connected devices list
                and manually unplugging the inverter from the network. The inverter than disappeared from the list of
                connected devices, after reconnecting the inverter I could then deduce which Ip and mac address belonged
                to the inverter. Afterwards a port scan was executed on the found Ips. Most of the found ports were
                filtered, which meant they were blocked in some way shape or form.

            </Text>
            <br/>
            <Text fontSize={'xl'} fontWeight={"bold"}>Table of Contents</Text>
            <UnorderedList>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Best practices</ListItem>
                <ListItem>Conclusion</ListItem>
            </UnorderedList>
            <br/>
            <Text fontSize={'xl'} fontWeight={"bold"}>Strengths</Text>
            <Text fontSize={'ll'}>
                After our findings we can only conclude that the SolarEdge inverter is in some way secured and
                doesn’t show any data being send to intercept. Also the inverter itself has some implementation of a
                firewall that blocks NMAP from properly scanning and displaying open ports.

            </Text>
            <br/>

            <Text fontSize={"xl"} fontWeight={"bold"}>
                Vulnerabilities
            </Text>
            <Text fontSize={"l"}>
                The vulnerabilities, in this case, were not found, due to testing restrictions.
            </Text>
            <br/>
            <Text id={"Bestpractices"} fontSize={'xl'} fontWeight={"bold"}>Best practices</Text>
            <Text>
                The Bosch Siemens devices and surrounding environment show good usage of:{" "}
                <Link textColor={"blue"}  href="/fontys-intersect-2021/#/bestpractices/splitdev">
                    split development and production environments
                </Link>
                ,{" "}
                <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/authentication">
                    authentication
                </Link>{", "}
                <Link textColor={"blue"}  href="/fontys-intersect-2021/#/bestpractices/authorization">
                    authorization
                </Link>
                ,{" "}
                <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/errorhandling">
                    error handling
                </Link>
                ,{" "}
                ; more about these best practices can be read on their respective pages.
            </Text>
            <br/>
            <Text fontSize="xl" fontWeight={"bold"}>
                Conclusion
            </Text>
            <Text fontSize="l">
                SolarEdge made an interesting platform that uses a lot of good practices.
                This results in a strong environment that is because of its complexity, not interesting to hack.
                </Text>
        </Container>
        <Container h={"200px"}></Container>
    </Box>
);
