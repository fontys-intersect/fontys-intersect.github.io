import {ExternalLinkIcon} from '@chakra-ui/icons';
import {Box, Container, Image, Text, Divider, ListItem, UnorderedList, Link} from '@chakra-ui/react';

export const BoschSiemens = () => (
    <Box w={'100%'} alignItems="center">
        <Container maxW={['100%', '80%']} p={4}>
            <Text fontSize="3xl"> Bosch Siemens Home Connect case</Text>
            <br/>
            <Text fontSize={"xl"} fontWeight={"bold"}> Introduction </Text>
            <Text fontSize={'l'}>
                The Bosch Siemens kitchen appliances are using the Home Connect environment to give notifications and to
                give commands to these devices. These devices include; oven, a coffee machine and a dishwasher. These
                can only be controlled via the home connect App.
            </Text>
            <br/>
            <Text fontSize={"xl"} fontWeight={"bold"}>Table of Contents </Text>
            <UnorderedList>
                <ListItem>Architecture</ListItem>
                <ListItem>Tools</ListItem>
                <ListItem>Strengths</ListItem>
                <ListItem>Vulnerabilities</ListItem>
                <ListItem>Best practices</ListItem>
                <ListItem>Conclusion</ListItem>
            </UnorderedList>
            <br/>
            <Text fontSize={'xl'} fontWeight={'bold'}>Architecture</Text>
            <Image
                src={'/fontys-intersect-2021/assets/images/BoschSiemensArchitecture.jpg'}
                alt="test"
                h={'60%'}
                w={'60%'}
            />
            <Text fontSize={'l'}>
                Here you can see that the smart appliances usually connect to the home connect cloud service from Bosch
                and Siemens which also allows connections via the app on your phone.
                Even when I am in the same network with these devices it prefers using the cloud service. In
                documentation and field research it was found that the “direct connection” is only used in the case of
                downtime on the cloud service end.
            </Text>
            <br/>
            <Text fontSize={'l'} fontWeight={"bold"}>Tools used</Text>
            <UnorderedList>
                <ListItem><Link href="/">Wireshark</Link></ListItem>
                <ListItem><Link href="/">Nmap</Link></ListItem>
            </UnorderedList>
            <br/>
            <Text fontSize={"xl"} fontWeight={"bold"}>
                Strengths
            </Text>
            <Text fontSize="l">
                Home connect services are very strong in the manner of <Link textColor={"blue"}
                                                                             href="/fontys-intersect-2021/#/bestpractices/securedata">secure
                data transfer</Link> and storage.
                For example when I connect to the home connect servers it uses tls :
            </Text>
            <Image
                src={'/fontys-intersect-2021/assets/images/BoschSiemensWireshark1.png'}
                alt="test"
                h={'100%'}
                w={'100%'}
            />
            <Text fontSize="l">
                Every time the client connects to a home connect device it uses tls to <Link textColor={"blue"}
                                                                                             href="/fontys-intersect-2021/#/bestpractices/authentication">authenticate</Link> the
                application.
            </Text>
            <Text fontSize="l">
                also all the data is encrypted :
            </Text>
            <Image
                src={'/fontys-intersect-2021/assets/images/BoschSiemensWireshark2.png'}
                alt="test"
                h={'100%'}
                w={'100%'}
            />
            <Text fontSize="l">
                And since they are using TLS v1.2 they also use the encryption method with Sha256 giving it an extra
                hard cipher to crack.
            </Text>
            <br/>
            <Text fontSize={"xl"} fontWeight={"bold"}>
                Vulnerabilities
            </Text>
            <Text fontSize={"l"}>
                The vulnerabilities, in this case, were not found. Bosch Siemens devices receive frequent updates and are pentested often.
            </Text>
            <br/>
            <Text fontSize="2xl" fontWeight={"bold"}>
                Best Practices
            </Text>

            <Text>
                The Bosch Siemens devices and surrounding environment show good usage of:{" "}
                <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/splitdev">
                    split development and production environments
                </Link>
                ,{" "}
                <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/authentication">
                    authentication
                </Link>{", "}
                <Link textColor={"blue"} href="/fontys-intersect-2021/#/bestpractices/authorization">
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
            <Text fontSize={"xl"} fontWeight={"bold"}>
                Conclusion
            </Text>
            <Text fontSize="l">
                Bosch and Siemens made an interesting platform that uses a lot of good practices.
                This results in a strong environment that is because of its complexity, not interesting to hack.
                Furthermore, Bosch and Siemens keep their devices up to date by auto updating the software, thereby
                outrunning the possible vulnerabilities.
            </Text>
            <br/>
        </Container>
        <Container h={"200px"}></Container>
    </Box>
);
