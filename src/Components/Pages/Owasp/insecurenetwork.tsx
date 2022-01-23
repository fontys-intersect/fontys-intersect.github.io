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

export const Network = () => (
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
            <Text fontSize="3xl"> Insecure Network Services </Text>
            <Text fontSize={"l"}>
                Insecure network services appropriate to vulnerabilities in a network service can be used to access IoT devices. These open up a door for attackers to gain access to the devices and their data. These can also be exploited to gain unauthorised remote control of a device.
                As IoT devices are getting integrated into the network infrastructure, the risk of having a faulty device will become bigger and bigger, as IoT devices are used to transmit, retrieve and interpret data from other linked devices. The communication techniques/mechanisms can vary but can include protocols ranging from BLE and ZigBee to WiFi, cellular data and ethernet.
                To function correctly, the services require opening specific ports to communicate with both the internal network and the internet. However, leaving ports and services that provide access to devices or machines is a typical security issue.
                By closing the vulnerable ports, this security issue is prevented. However monitoring and managing ports can be time-consuming on larger networks with a constant adding of new devices.
                <br />
                The ability for smart technologies to make choices without human interference makes them unique. This level of device autonomy creates challenges to ensure consumer-grade mobility and interoperability without compromising the safety of IoT devices.
                <br />
                To function correctly, any Internet-connected service requires opening specific ports. Leaving open ports and services that provide access to devices or other machines is a typical security error. A joint study between BitSight and Advisen showed that 60 percent of the breached organizations had ten or more vulnerable, open ports.
                <br /> <br />
                Exploited service vulnerabilities in IoT devices may allow for stealthy malware services such as viruses, spyware, ransomware, and Trojans. Cybercriminals may use these open-port services to access sensitive data, listen to private communications, or execute Denial-of-Service (DoS) and Man-in-the-Middle (MITM) attacks.
                <br /> <br />
                A small network with relatively few IP addresses should not take a long time to close vulnerable ports. However, monitoring and managing open ports can be time-consuming on enterprise networks with a constant adding new devices.
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
