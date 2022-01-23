import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Box,
    Container,
    Image,
    Text,
    Divider,
    ListItem,
    UnorderedList,
    Link,
} from "@chakra-ui/react";

export const Storage = () => (
    <Box w={"100%"} h={"100vh"} alignItems="center">
        <Image
            src={"/fontys-intersect-2021/assets/images/owasp-logo.png"}
            alt="test"
            h={"10%"}
            w={"15%"}
            marginLeft={"10%"}
            marginTop={"1%"}
        />
        <Container maxW={["100%", "80%"]} p={4}>
            <Text fontSize="3xl">Insecure Data Transfer and Storage</Text>
            <Text fontSize={"l"}> While dealing with sensitive data anywhere in the ecosystem, proper encryption and access control is a necessity. Even when the data is at rest, in transit, or during processing. Lack of encryption is an open invitation for hackers to expose and capture data. To make sure the data is protected at its fullest, manufacturers of IoT devices need to take the following actions into account to get complete security: establish encryption at all available levels, only use secure channels like SSH, sFTP and HTTPS, and consider the use one-time-use keys that are stored remotely.
                <br />
                The network and communication layers play a central role in all IoT applications and implementations, facilitating sharing information between different layers and generating value through real-time interaction between IoT devices.
                <br />
                One of IoT applications’ key features is transferring information between IoT devices, networks, networks and networks, and high-level information processing infrastructures (e.g., clouds, data centers, etc.).

            </Text>
            <br />
            <Text fontSize={"xl"}>Cases</Text>
            <Text fontSize={"l"}>
                This vulnerability has been found within the following cases:
                <UnorderedList>
                    <ListItem><Link href="#/case/wled" textColor={"blue"}>WLED</Link></ListItem>
                    <ListItem><Link href="#/case/printer" textColor={"blue"}>HP Laserjet</Link></ListItem>
                </UnorderedList>
            </Text>
            <Divider m={2} />
            <Text fontSize="3xl"> Bibliography </Text>
            <Text fontSize={"xl"}>
                The bibliography according to this page is <br />
                <UnorderedList>
                    <ListItem>
                        KeyFactor. Top 10 IoT Vulnerabilities in your devices. Retrieved
                        January 21, 2022, from&nbsp;
                        <Link href="https://www.keyfactor.com/blog/top-10-iot-vulnerabilities-in-your-devices/#:~:text=of%20Physical%20Hardening-,Lack%20of%20a%20Secure%20Update%20Mechanism,to%20securely%20update%20the%20device.&text=Some%20devices%20may%20have%20reached,critical%20to%20addressing%20this%20vulnerability.">
                            Keyfactor <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        Govindraj Basatwar - Global Business Head. (2021, September 17). Guide to OWASP IoT Top 10 for proactive security. NWO. Retrieved November 11, 2021, from&nbsp;
                        <Link href="https://www.appsealing.com/owasp-iot-top-10/">
                            Appsealing <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Text>
        </Container>
    </Box>
);
